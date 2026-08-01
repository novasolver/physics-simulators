/* NovaSolver 1D — fluid (piping network) component library.
 * Same architecture as lib-thermal.js: each component supplies SVG symbol geometry,
 * pins, parameters, and a `stamp` that writes residual/Jacobian contributions.
 *
 * Unknown per node: pressure in kPa. (The solver caps Newton steps at 100 units per
 * iteration — with Pa that damping would cripple convergence; kPa keeps typical
 * pressures within a few damped steps.) Flows are volumetric, Q [m^3/s]; the UI
 * displays L/min. Steady state, incompressible, single phase only.
 *
 * Sign convention: F[i] accumulates net volume flow OUT of node i (m^3/s).
 */
(function (root) {
  "use strict";

  var KPA = 1000;               // 1 solver unit = 1 kPa = 1000 Pa
  var VEPS = 1e-6;              // velocity regularisation [m/s] (smooths v|v| at 0)

  function num(v, d) { var x = parseFloat(v); return isFinite(x) ? x : d; }

  /* ---- Darcy-Weisbach pressure drop for a straight pipe, dp(Q) in Pa ----
   * Laminar (Re<2300): dp = 32 mu L v / D^2   (Hagen-Poiseuille; linear, smooth at 0)
   * Turbulent (Re>3500): Swamee-Jain  f = 0.25/[log10(rough/(3.7D)+5.74/Re^0.9)]^2,
   *                      dp = f (L/D)(rho/2) v|v|
   * 2300..3500: linear blend so dp(Q) stays continuous and monotone — the raw
   * laminar/turbulent switch is discontinuous, and a target dp inside that jump
   * would have no solution for the local Newton below. */
  function pipeDp(Q, m) {
    var A = Math.PI * m.D * m.D / 4;
    var v = Q / A;
    var av = Math.abs(v);
    var lam = 32 * m.mu * m.L * v / (m.D * m.D);
    var Re = m.rho * av * m.D / m.mu;
    if (Re < 2300) return lam;
    var sj = 0.25 / Math.pow(Math.log10(m.rough / (3.7 * m.D) + 5.74 / Math.pow(Re, 0.9)), 2);
    var turb = sj * (m.L / m.D) * (m.rho / 2) * v * av;
    if (Re >= 3500) return turb;
    var w = (Re - 2300) / 1200;
    return (1 - w) * lam + w * turb;
  }

  /* ---- local loss (valve/bend):  dp = zeta (rho/2) v sqrt(v^2+eps^2) ----
   * The eps term regularises the v|v| law so dQ/ddp stays finite at dp=0
   * (relative error ~1e-12 at working velocities). */
  function kvDp(Q, m) {
    var A = Math.PI * m.D * m.D / 4;
    var v = Q / A;
    return m.zeta * (m.rho / 2) * v * Math.sqrt(v * v + VEPS * VEPS);
  }

  /* ---- invert dp(Q)=target by a guarded local Newton ----
   * dpFn is smooth and strictly monotone in Q, so Newton from a laminar-ish guess
   * converges in a handful of iterations; steps are clamped for safety. */
  function solveQ(dpFn, m, target, Qguess) {
    if (target === 0) return 0;
    var Q = Qguess;
    if (!isFinite(Q) || Q === 0) {
      // laminar guess; if clearly turbulent, fall back to an f=0.02 estimate
      if (m.L !== undefined) {
        Q = target * Math.PI * Math.pow(m.D, 4) / (128 * m.mu * m.L);
        var A0 = Math.PI * m.D * m.D / 4;
        var vg = Q / A0;
        if (m.rho * Math.abs(vg) * m.D / m.mu > 2300) {
          var vt = Math.sqrt(2 * Math.abs(target) * m.D / (0.02 * m.L * m.rho));
          Q = (target > 0 ? 1 : -1) * vt * A0;
        }
      } else {
        var A1 = Math.PI * m.D * m.D / 4;
        Q = (target > 0 ? 1 : -1) * A1 *
            Math.sqrt(2 * Math.abs(target) / (m.rho * Math.max(m.zeta, 1e-9)));
      }
    }
    var tol = 1e-10 * Math.max(1, Math.abs(target));
    for (var it = 0; it < 40; it++) {
      var g = dpFn(Q, m) - target;
      if (Math.abs(g) <= tol) break;
      var h = Math.max(1e-14, Math.abs(Q) * 1e-7);
      var d = (dpFn(Q + h, m) - dpFn(Q - h, m)) / (2 * h);
      if (!(d > 0)) d = 1e-12;
      var step = -g / d;
      var lim = Math.max(2 * Math.abs(Q), 1e-6);
      if (step > lim) step = lim; else if (step < -lim) step = -lim;
      Q += step;
    }
    return Q;
  }

  /* two-node resistive stamp shared by PIPE and KV */
  function stampResistive(ctx, el, dpFn, m) {
    var a = el.nodes[0], b = el.nodes[1];
    var dpPa = (ctx.T[a] - ctx.T[b]) * KPA;
    var Q = solveQ(dpFn, m, dpPa, el._Q);
    el._Q = Q;                                    // warm start for the next iteration
    var h = Math.max(1e-14, Math.abs(Q) * 1e-7);
    var dpdQ = (dpFn(Q + h, m) - dpFn(Q - h, m)) / (2 * h);
    var G = KPA / Math.max(dpdQ, 1e-9);           // dQ/dx, x in kPa
    ctx.F[a] += Q; ctx.F[b] -= Q;
    ctx.J[a][a] += G; ctx.J[a][b] -= G;
    ctx.J[b][a] -= G; ctx.J[b][b] += G;
  }

  function pipeParams(el) {
    return { L: Math.max(num(el.p.L, 1), 1e-6), D: Math.max(num(el.p.D, 0.02), 1e-6),
             rough: Math.max(num(el.p.rough, 4.6e-5), 0),
             rho: Math.max(num(el.p.rho, 998), 1e-6),
             mu: Math.max(num(el.p.mu, 1.002e-3), 1e-12) };
  }
  function kvParams(el) {
    return { zeta: Math.max(num(el.p.zeta, 1), 1e-9), D: Math.max(num(el.p.D, 0.02), 1e-6),
             rho: Math.max(num(el.p.rho, 998), 1e-6) };
  }

  var GP = 1e-2;   // pump internal conductance [m^3/s per Pa] — near-ideal source

  var LIB = {
    /* ---------------- straight pipe (Darcy-Weisbach) ---------------- */
    PIPE: {
      label: "直管", labelEn: "Pipe",
      pins: [{ x: -30, y: 0 }, { x: 30, y: 0 }],
      params: [
        { key: "L", label: "L", unit: "m", def: 1.0, min: 1e-6 },
        { key: "D", label: "D", unit: "m", def: 0.02, min: 1e-6 },
        { key: "rough", label: "ε", unit: "m", def: 4.6e-5, min: 0 },
        { key: "rho", label: "ρ", unit: "kg/m³", def: 998, min: 1e-6 },
        { key: "mu", label: "μ", unit: "Pa·s", def: 1.002e-3, min: 1e-12 }
      ],
      symbol:
        '<line x1="-30" y1="0" x2="-22" y2="0"/><line x1="22" y1="0" x2="30" y2="0"/>' +
        '<rect x="-22" y="-6" width="44" height="12" rx="2" class="fillbody"/>' +
        '<line x1="-22" y1="-6" x2="22" y2="-6" class="thick"/>' +
        '<line x1="-22" y1="6" x2="22" y2="6" class="thick"/>',
      stamp: function (ctx, el) { stampResistive(ctx, el, pipeDp, pipeParams(el)); },
      flow: function (T, el) {
        var m = pipeParams(el);
        return solveQ(pipeDp, m, (T[el.nodes[0]] - T[el.nodes[1]]) * KPA, el._Q);
      }
    },

    /* ---------------- local loss (valve, bend, fitting) ---------------- */
    KV: {
      label: "局所損失（弁）", labelEn: "Local loss (valve)",
      pins: [{ x: -30, y: 0 }, { x: 30, y: 0 }],
      params: [
        { key: "zeta", label: "ζ", unit: "-", def: 1.0, min: 1e-9 },
        { key: "D", label: "D", unit: "m", def: 0.02, min: 1e-6 },
        { key: "rho", label: "ρ", unit: "kg/m³", def: 998, min: 1e-6 }
      ],
      symbol:
        '<line x1="-30" y1="0" x2="-14" y2="0"/><line x1="14" y1="0" x2="30" y2="0"/>' +
        '<path d="M-14 -9 L14 9 L14 -9 L-14 9 Z" class="fillbody"/>',
      stamp: function (ctx, el) { stampResistive(ctx, el, kvDp, kvParams(el)); },
      flow: function (T, el) {
        var m = kvParams(el);
        return solveQ(kvDp, m, (T[el.nodes[0]] - T[el.nodes[1]]) * KPA, el._Q);
      }
    },

    /* ---------------- pump (near-ideal pressure source) ----------------
     * Q = Gp * ((p_a + dp) - p_b): a pressure rise dp with a very small internal
     * resistance 1/Gp. Exact MNA source extension is deferred to v0.3. */
    PUMP: {
      label: "ポンプ（定圧）", labelEn: "Pump (fixed Δp)",
      pins: [{ x: -30, y: 0 }, { x: 30, y: 0 }],
      params: [{ key: "dp", label: "Δp", unit: "kPa", def: 50 }],
      symbol:
        '<line x1="-30" y1="0" x2="-18" y2="0"/><line x1="18" y1="0" x2="30" y2="0"/>' +
        '<circle cx="0" cy="0" r="18" class="fillbody"/>' +
        '<path d="M-7 -9 L11 0 L-7 9 Z" class="thick"/>',
      stamp: function (ctx, el) {
        var a = el.nodes[0], b = el.nodes[1];
        var dpPa = num(el.p.dp, 50) * KPA;
        var Q = GP * ((ctx.T[a] * KPA + dpPa) - ctx.T[b] * KPA);
        var G = GP * KPA;                         // dQ/dx per kPa
        ctx.F[a] += Q; ctx.F[b] -= Q;
        ctx.J[a][a] += G; ctx.J[a][b] -= G;
        ctx.J[b][a] -= G; ctx.J[b][b] += G;
      },
      flow: function (T, el) {
        var dpPa = num(el.p.dp, 50) * KPA;
        return GP * ((T[el.nodes[0]] * KPA + dpPa) - T[el.nodes[1]] * KPA);
      }
    },

    /* ---------------- flow source ---------------- */
    QSRC: {
      label: "流量源", labelEn: "Flow source",
      pins: [{ x: 0, y: 28 }],
      params: [{ key: "Q", label: "Q", unit: "L/min", def: 6 }],
      symbol:
        '<circle cx="0" cy="0" r="18" class="fillbody"/>' +
        '<line x1="0" y1="28" x2="0" y2="18"/>' +
        '<path d="M0 -10 L0 8 M-6 2 L0 8 L6 2" class="thick" fill="none"/>',
      stamp: function (ctx, el) {
        ctx.F[el.nodes[0]] -= num(el.p.Q, 6) / 60000;   // L/min -> m^3/s, injected
      }
    },

    /* ---------------- fixed pressure (Dirichlet) ---------------- */
    PFIX: {
      label: "固定圧力", labelEn: "Fixed pressure",
      pins: [{ x: 0, y: -28 }],
      params: [{ key: "p", label: "p", unit: "kPa", def: 0 }],
      dirichlet: true,
      symbol:
        '<line x1="0" y1="-28" x2="0" y2="-16"/>' +
        '<rect x="-16" y="-16" width="32" height="32" rx="4" class="fillbody"/>' +
        '<line x1="-9" y1="8" x2="9" y2="8" class="thick"/>' +
        '<line x1="-9" y1="8" x2="-9" y2="-2" class="thick"/>' +
        '<line x1="9" y1="8" x2="9" y2="-2" class="thick"/>' +
        '<path d="M-9 -2 Q0 -12 9 -2" fill="none" class="thick"/>'
    }
  };

  /* Build a solver system from a flat model description (lib-thermal pattern). */
  function buildSystem(model) {
    var elements = [], fixed = [], i;
    for (i = 0; i < model.elements.length; i++) {
      var e = model.elements[i], def = LIB[e.type];
      if (!def) continue;
      if (def.dirichlet) {
        fixed.push({ node: e.nodes[0], value: num(e.p.p, 0) });
      } else {
        elements.push({
          type: e.type, nodes: e.nodes, p: e.p,
          stamp: def.stamp, flow: def.flow, ref: e.ref
        });
      }
    }
    return { n: model.nodeCount, elements: elements, fixed: fixed };
  }

  root.NS1D = root.NS1D || {};
  root.NS1D.fluid = { LIB: LIB, buildSystem: buildSystem, KPA: KPA };
})(typeof globalThis !== "undefined" ? globalThis : this);

if (typeof module !== "undefined" && module.exports) {
  module.exports = (typeof globalThis !== "undefined" ? globalThis : this).NS1D;
}
