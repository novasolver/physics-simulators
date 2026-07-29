/* NovaSolver 1D — verification suite.
 * Every case has a closed-form answer. Run in a browser (window.NS1D.verify.run())
 * or headless:  node 1d/js/verify.js
 * Results are shown to users on the tool page, which is the whole point: a free solver
 * nobody can check is a free solver nobody trusts.
 */
(function (root) {
  "use strict";
  function get() {
    if (root.NS1D) return root.NS1D;
    throw new Error("NS1D not loaded");
  }

  var CASES = [
    {
      id: "series-R",
      name: "直列熱抵抗の定常温度", nameEn: "Series thermal resistances, steady temperature",
      nameEn: "Steady temperature across resistances in series",
      ref: "T_j = T_amb + P·ΣR",
      run: function (NS) {
        // junction -R1- case -R2- ambient(fixed 25), P=100W into junction
        var model = {
          nodeCount: 3,
          elements: [
            { type: "R", nodes: [0, 1], p: { R: 0.15 } },
            { type: "R", nodes: [1, 2], p: { R: 0.35 } },
            { type: "P", nodes: [0], p: { P: 100 } },
            { type: "T", nodes: [2], p: { T: 25 } }
          ]
        };
        var sys = NS.thermal.buildSystem(model);
        var r = NS.solver.solveSteady(sys);
        var exact = 25 + 100 * (0.15 + 0.35);
        return { ok: r.ok, got: r.T[0], exact: exact };
      }
    },
    {
      id: "parallel-R",
      name: "並列熱抵抗の合成", nameEn: "Parallel thermal resistances, combination",
      nameEn: "Parallel resistances combine reciprocally",
      ref: "R_eq = (1/R1 + 1/R2)^-1",
      run: function (NS) {
        var model = {
          nodeCount: 2,
          elements: [
            { type: "R", nodes: [0, 1], p: { R: 0.4 } },
            { type: "R", nodes: [0, 1], p: { R: 0.6 } },
            { type: "P", nodes: [0], p: { P: 50 } },
            { type: "T", nodes: [1], p: { T: 20 } }
          ]
        };
        var sys = NS.thermal.buildSystem(model);
        var r = NS.solver.solveSteady(sys);
        var Req = 1 / (1 / 0.4 + 1 / 0.6);
        return { ok: r.ok, got: r.T[0], exact: 20 + 50 * Req };
      }
    },
    {
      id: "convection",
      name: "対流境界の定常温度", nameEn: "Convective boundary, steady temperature",
      nameEn: "Steady temperature with convective boundary",
      ref: "ΔT = P/(h·A)",
      run: function (NS) {
        var model = {
          nodeCount: 2,
          elements: [
            { type: "CONV", nodes: [0, 1], p: { h: 25, A: 0.02 } },
            { type: "P", nodes: [0], p: { P: 15 } },
            { type: "T", nodes: [1], p: { T: 30 } }
          ]
        };
        var sys = NS.thermal.buildSystem(model);
        var r = NS.solver.solveSteady(sys);
        return { ok: r.ok, got: r.T[0], exact: 30 + 15 / (25 * 0.02) };
      }
    },
    {
      id: "lumped-transient",
      name: "集中熱容量の過渡応答（指数則）", nameEn: "Lumped capacitance transient (exponential law)",
      nameEn: "Lumped capacitance transient (exponential)",
      ref: "T(t) = T∞ + (T0-T∞)·exp(-t/RC)",
      run: function (NS) {
        var R = 0.5, C = 200, tau = R * C;   // 100 s
        var model = {
          nodeCount: 2,
          elements: [
            { type: "R", nodes: [0, 1], p: { R: R } },
            { type: "C", nodes: [0], p: { C: C } },
            { type: "T", nodes: [1], p: { T: 20 } }
          ]
        };
        var sys = NS.thermal.buildSystem(model);
        var T0 = new Float64Array([120, 20]);
        var dt = 0.05, steps = Math.round(tau / dt);          // integrate to t = tau
        var r = NS.solver.solveTransient(sys, { dt: dt, steps: steps, initial: T0 });
        if (!r.ok) return { ok: false, got: NaN, exact: NaN };
        var last = r.history[r.history.length - 1][0];
        var exact = 20 + (120 - 20) * Math.exp(-1);
        return { ok: true, got: last, exact: exact, tolRel: 1e-3 };  // backward Euler is O(dt)
      }
    },
    {
      id: "steady-power-balance",
      name: "定常でのエネルギー保存", nameEn: "Steady-state energy conservation",
      nameEn: "Energy balance closes at steady state",
      ref: "Σ P_in = Σ q_out",
      run: function (NS) {
        var model = {
          nodeCount: 4,
          elements: [
            { type: "R", nodes: [0, 1], p: { R: 0.2 } },
            { type: "R", nodes: [1, 2], p: { R: 0.3 } },
            { type: "CONV", nodes: [2, 3], p: { h: 40, A: 0.05 } },
            { type: "P", nodes: [0], p: { P: 75 } },
            { type: "T", nodes: [3], p: { T: 25 } }
          ]
        };
        var sys = NS.thermal.buildSystem(model);
        var r = NS.solver.solveSteady(sys);
        // heat leaving through the convective element must equal injected power
        var conv = sys.elements.filter(function (e) { return e.type === "CONV"; })[0];
        var q = NS.solver.elementFlow(conv, r.T);
        return { ok: r.ok, got: q, exact: 75 };
      }
    },
    {
      id: "radiation",
      name: "放射のみの平衡温度（非線形）", nameEn: "Radiation-only equilibrium temperature (nonlinear)",
      nameEn: "Radiation-only equilibrium (nonlinear)",
      ref: "P = εσA(T⁴ - T∞⁴)",
      run: function (NS) {
        var eps = 0.9, A = 0.05, P = 20, Tamb = 27;
        var model = {
          nodeCount: 2,
          elements: [
            { type: "RAD", nodes: [0, 1], p: { eps: eps, A: A } },
            { type: "P", nodes: [0], p: { P: P } },
            { type: "T", nodes: [1], p: { T: Tamb } }
          ]
        };
        var sys = NS.thermal.buildSystem(model);
        var r = NS.solver.solveSteady(sys);
        var S = NS.thermal.SIGMA, K = NS.thermal.K0;
        var exact = Math.pow(P / (eps * S * A) + Math.pow(Tamb + K, 4), 0.25) - K;
        return { ok: r.ok, got: r.T[0], exact: exact };
      }
    }
  ];

  function run() {
    var NS = get(), out = [];
    for (var i = 0; i < CASES.length; i++) {
      var c = CASES[i], res, err = null;
      try { res = c.run(NS); } catch (e) { res = { ok: false }; err = e.message; }
      var tol = res.tolRel || 1e-6;
      var rel = (res.ok && isFinite(res.got) && isFinite(res.exact))
        ? Math.abs(res.got - res.exact) / Math.max(1e-12, Math.abs(res.exact)) : Infinity;
      out.push({
        id: c.id, name: c.name, nameEn: c.nameEn, ref: c.ref,
        got: res.got, exact: res.exact, rel: rel,
        pass: res.ok && rel <= tol, error: err, tol: tol
      });
    }
    return out;
  }

  root.NS1D = root.NS1D || {};
  root.NS1D.verify = { run: run, CASES: CASES };
})(typeof globalThis !== "undefined" ? globalThis : this);

if (typeof require !== "undefined" && typeof module !== "undefined" && require.main === module) {
  require("./solver.js");
  require("./lib-thermal.js");
  var rows = globalThis.NS1D.verify.run();
  var bad = 0;
  rows.forEach(function (r) {
    if (!r.pass) bad++;
    console.log((r.pass ? "PASS " : "FAIL ") + r.id.padEnd(22) +
      " got=" + Number(r.got).toPrecision(8) +
      " exact=" + Number(r.exact).toPrecision(8) +
      " rel=" + r.rel.toExponential(2) + (r.error ? "  ERR:" + r.error : ""));
  });
  console.log(bad === 0 ? "ALL PASS (" + rows.length + ")" : bad + " FAILED");
  process.exit(bad === 0 ? 0 : 1);
}
