/* NovaSolver 1D — fluid verification suite.
 * Every case has a closed-form answer. Run in a browser (window.NS1D.verifyFluid.run())
 * or headless:  node 1d/js/verify-fluid.js
 */
(function (root) {
  "use strict";

  var OPT = { initial: 0, tol: 1e-12, maxIter: 300 };

  /* Hagen-Poiseuille reference drop in Pa for the shared laminar test pipe */
  var MU = 1e-3, RHO = 998, LEN = 2, DIA = 0.01, QREF = 1e-5;   // m^3/s
  var DP_HP = 128 * MU * LEN * QREF / (Math.PI * Math.pow(DIA, 4));  // Pa
  function pipe(nodes, L) {
    return { type: "PIPE", nodes: nodes,
             p: { L: L || LEN, D: DIA, rough: 4.6e-5, rho: RHO, mu: MU } };
  }
  function qsrc(node, Qm3s) {
    return { type: "QSRC", nodes: [node], p: { Q: Qm3s * 60000 } };  // UI unit is L/min
  }
  function pfix(node, kPa) {
    return { type: "PFIX", nodes: [node], p: { p: kPa } };
  }

  var CASES = [
    {
      id: "hagen-poiseuille",
      name: "層流直管の圧力損失", nameEn: "Laminar pipe pressure drop",
      ref: "Δp = 128μLQ/(πD⁴)",
      run: function (NS) {
        var sys = NS.fluid.buildSystem({ nodeCount: 2,
          elements: [qsrc(0, QREF), pipe([0, 1]), pfix(1, 0)] });
        var r = NS.solver.solveSteady(sys, OPT);
        return { ok: r.ok, got: r.T[0] * 1000, exact: DP_HP };   // kPa -> Pa
      }
    },
    {
      id: "series-pipe",
      name: "直管2本直列", nameEn: "Two pipes in series",
      ref: "Δp_total = 2·Δp_1",
      run: function (NS) {
        var sys = NS.fluid.buildSystem({ nodeCount: 3,
          elements: [qsrc(0, QREF), pipe([0, 1]), pipe([1, 2]), pfix(2, 0)] });
        var r = NS.solver.solveSteady(sys, OPT);
        return { ok: r.ok, got: r.T[0] * 1000, exact: 2 * DP_HP };
      }
    },
    {
      id: "parallel-pipe",
      name: "直管2本並列の流量配分", nameEn: "Flow split between parallel pipes",
      ref: "Q_i = Q/2, Δp = Δp_1(Q/2)",
      run: function (NS) {
        var sys = NS.fluid.buildSystem({ nodeCount: 2,
          elements: [qsrc(0, 2 * QREF), pipe([0, 1]), pipe([0, 1]), pfix(1, 0)] });
        var r = NS.solver.solveSteady(sys, OPT);
        if (!r.ok) return { ok: false, got: NaN, exact: DP_HP };
        // both the node pressure and the per-branch flow must match one pipe at Q/2
        // (elements[0] is the QSRC; the pipes are elements[1] and [2])
        var q0 = NS.solver.elementFlow(sys.elements[1], r.T);
        var relQ = Math.abs(q0 - QREF) / QREF;
        return { ok: r.ok && relQ < 1e-6, got: r.T[0] * 1000, exact: DP_HP };
      }
    },
    {
      id: "mass-balance",
      name: "分岐網の質量保存（乱流）", nameEn: "Mass conservation in a branched net (turbulent)",
      ref: "ΣQ_in = ΣQ_out",
      run: function (NS) {
        // 1e-4 m^3/s source splitting into two unequal branches, one against 20 kPa
        var m = { nodeCount: 3, elements: [
          qsrc(0, 1e-4),
          { type: "PIPE", nodes: [0, 1], p: { L: 3, D: 0.02, rough: 4.6e-5, rho: RHO, mu: MU } },
          { type: "PIPE", nodes: [0, 2], p: { L: 5, D: 0.015, rough: 4.6e-5, rho: RHO, mu: MU } },
          pfix(1, 0), pfix(2, 20)
        ] };
        var sys = NS.fluid.buildSystem(m);
        var r = NS.solver.solveSteady(sys, OPT);
        if (!r.ok) return { ok: false, got: NaN, exact: 1e-4 };
        var out = NS.solver.elementFlow(sys.elements[1], r.T) +
                  NS.solver.elementFlow(sys.elements[2], r.T);
        // report as flows so rel = |out-in|/in directly
        return { ok: r.ok, got: out, exact: 1e-4, tol: 1e-9 };
      }
    }
  ];

  function run() {
    var NS = root.NS1D, rows = [];
    CASES.forEach(function (c) {
      var out, err = null;
      try { out = c.run(NS); }
      catch (e) { out = { ok: false, got: NaN, exact: NaN }; err = e.message; }
      var rel = Math.abs(out.got - out.exact) / Math.max(Math.abs(out.exact), 1e-30);
      var tol = out.tol || (c.id === "mass-balance" ? 1e-9 : 1e-6);
      rows.push({ id: c.id, name: c.name, nameEn: c.nameEn, ref: c.ref,
                  got: out.got, exact: out.exact, rel: rel,
                  pass: !!out.ok && isFinite(rel) && rel <= tol, error: err });
    });
    return rows;
  }

  root.NS1D = root.NS1D || {};
  root.NS1D.verifyFluid = { run: run };
})(typeof globalThis !== "undefined" ? globalThis : this);

if (typeof module !== "undefined" && module.exports) {
  module.exports = (typeof globalThis !== "undefined" ? globalThis : this).NS1D;
}

/* headless entry: node 1d/js/verify-fluid.js */
if (typeof require !== "undefined" && typeof module !== "undefined" && require.main === module) {
  require("./solver.js");
  require("./lib-fluid.js");
  var rows = globalThis.NS1D.verifyFluid.run();
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
