/* NovaSolver 1D — thermal component library.
 * Each component supplies: symbol geometry (SVG), pin positions, parameters, and a
 * `stamp` that writes its residual/Jacobian contribution. Adding a domain later
 * (fluid, electrical) means adding another file exactly like this one — the solver
 * and the editor stay untouched.
 *
 * Sign convention: F[i] accumulates net heat flow OUT of node i (W).
 */
(function (root) {
  "use strict";
  var SIGMA = 5.670374419e-8;   // Stefan-Boltzmann [W/(m^2 K^4)]
  var K0 = 273.15;

  function num(v, d) { var x = parseFloat(v); return isFinite(x) ? x : d; }

  /* two-node conductance helper: q = G*(Ta - Tb) */
  function stampConductance(ctx, a, b, G) {
    var Ta = ctx.T[a], Tb = ctx.T[b], q = G * (Ta - Tb);
    ctx.F[a] += q; ctx.F[b] -= q;
    ctx.J[a][a] += G; ctx.J[a][b] -= G;
    ctx.J[b][a] -= G; ctx.J[b][b] += G;
  }

  var LIB = {
    /* ---------------- thermal resistance ---------------- */
    R: {
      label: "熱抵抗", labelEn: "Thermal resistance",
      pins: [{ x: -30, y: 0 }, { x: 30, y: 0 }],
      params: [{ key: "R", label: "R", unit: "K/W", def: 0.5, min: 1e-9 }],
      symbol:
        '<line x1="-30" y1="0" x2="-16" y2="0"/><line x1="16" y1="0" x2="30" y2="0"/>' +
        '<rect x="-16" y="-9" width="32" height="18" rx="2" class="fillbody"/>',
      stamp: function (ctx, el) {
        var R = Math.max(num(el.p.R, 0.5), 1e-9);
        stampConductance(ctx, el.nodes[0], el.nodes[1], 1 / R);
      },
      flow: function (T, el) {
        var R = Math.max(num(el.p.R, 0.5), 1e-9);
        return (T[el.nodes[0]] - T[el.nodes[1]]) / R;
      }
    },

    /* ---------------- convection to a node (h*A) ---------------- */
    CONV: {
      label: "対流", labelEn: "Convection",
      pins: [{ x: -30, y: 0 }, { x: 30, y: 0 }],
      params: [
        { key: "h", label: "h", unit: "W/m²K", def: 25, min: 0 },
        { key: "A", label: "A", unit: "m²", def: 0.01, min: 1e-9 }
      ],
      symbol:
        '<line x1="-30" y1="0" x2="-16" y2="0"/><line x1="16" y1="0" x2="30" y2="0"/>' +
        '<rect x="-16" y="-11" width="32" height="22" rx="3" class="fillbody"/>' +
        '<path d="M-10 4 q5 -8 10 0 q5 8 10 0" class="wave"/>',
      stamp: function (ctx, el) {
        var G = Math.max(num(el.p.h, 25) * num(el.p.A, 0.01), 0);
        stampConductance(ctx, el.nodes[0], el.nodes[1], G);
      },
      flow: function (T, el) {
        var G = num(el.p.h, 25) * num(el.p.A, 0.01);
        return G * (T[el.nodes[0]] - T[el.nodes[1]]);
      }
    },

    /* ---------------- radiation (nonlinear) ---------------- */
    RAD: {
      label: "放射", labelEn: "Radiation",
      pins: [{ x: -30, y: 0 }, { x: 30, y: 0 }],
      params: [
        { key: "eps", label: "ε", unit: "-", def: 0.85, min: 0, max: 1 },
        { key: "A", label: "A", unit: "m²", def: 0.01, min: 1e-9 }
      ],
      symbol:
        '<line x1="-30" y1="0" x2="-16" y2="0"/><line x1="16" y1="0" x2="30" y2="0"/>' +
        '<rect x="-16" y="-11" width="32" height="22" rx="3" class="fillbody"/>' +
        '<path d="M-8 -5 l6 5 l-6 5 M2 -5 l6 5 l-6 5" class="wave"/>',
      /* q = eps*sigma*A*(Ta^4 - Tb^4) with T in kelvin; dq/dTa = 4 eps sigma A Ta^3 */
      stamp: function (ctx, el) {
        var a = el.nodes[0], b = el.nodes[1];
        var c = num(el.p.eps, 0.85) * SIGMA * Math.max(num(el.p.A, 0.01), 1e-9);
        var Ta = ctx.T[a] + K0, Tb = ctx.T[b] + K0;
        var q = c * (Ta * Ta * Ta * Ta - Tb * Tb * Tb * Tb);
        var da = 4 * c * Ta * Ta * Ta, db = -4 * c * Tb * Tb * Tb;
        ctx.F[a] += q; ctx.F[b] -= q;
        ctx.J[a][a] += da; ctx.J[a][b] += db;
        ctx.J[b][a] -= da; ctx.J[b][b] -= db;
      },
      flow: function (T, el) {
        var c = num(el.p.eps, 0.85) * SIGMA * num(el.p.A, 0.01);
        var Ta = T[el.nodes[0]] + K0, Tb = T[el.nodes[1]] + K0;
        return c * (Math.pow(Ta, 4) - Math.pow(Tb, 4));
      }
    },

    /* ---------------- thermal capacitance (to reference) ---------------- */
    C: {
      label: "熱容量", labelEn: "Thermal capacitance",
      pins: [{ x: 0, y: -28 }],
      params: [{ key: "C", label: "C", unit: "J/K", def: 50, min: 1e-9 }],
      symbol:
        '<line x1="0" y1="-28" x2="0" y2="-8"/>' +
        '<line x1="-18" y1="-8" x2="18" y2="-8" class="thick"/>' +
        '<line x1="-18" y1="2" x2="18" y2="2" class="thick"/>' +
        '<line x1="0" y1="2" x2="0" y2="14"/>' +
        '<line x1="-12" y1="14" x2="12" y2="14"/><line x1="-7" y1="19" x2="7" y2="19"/>' +
        '<line x1="-3" y1="24" x2="3" y2="24"/>',
      /* backward Euler: q_stored = C*(T - Tprev)/dt flows out of the node */
      stamp: function (ctx, el) {
        if (!ctx.transient) return;              // steady state: dT/dt = 0
        var i = el.nodes[0], C = Math.max(num(el.p.C, 50), 1e-9), g = C / ctx.dt;
        ctx.F[i] += g * (ctx.T[i] - ctx.Tprev[i]);
        ctx.J[i][i] += g;
      }
    },

    /* ---------------- heat source ---------------- */
    P: {
      label: "発熱源", labelEn: "Heat source",
      pins: [{ x: 0, y: 28 }],
      params: [{ key: "P", label: "P", unit: "W", def: 10 }],
      symbol:
        '<circle cx="0" cy="0" r="18" class="fillbody"/>' +
        '<line x1="0" y1="28" x2="0" y2="18"/>' +
        '<line x1="-8" y1="0" x2="8" y2="0" class="thick"/>' +
        '<line x1="0" y1="-8" x2="0" y2="8" class="thick"/>',
      stamp: function (ctx, el) {
        ctx.F[el.nodes[0]] -= num(el.p.P, 10);   // injected power reduces net outflow
      }
    },

    /* ---------------- fixed temperature (Dirichlet) ---------------- */
    T: {
      label: "固定温度", labelEn: "Fixed temperature",
      pins: [{ x: 0, y: -28 }],
      params: [{ key: "T", label: "T", unit: "°C", def: 25 }],
      dirichlet: true,
      symbol:
        '<line x1="0" y1="-28" x2="0" y2="-16"/>' +
        '<rect x="-16" y="-16" width="32" height="32" rx="4" class="fillbody"/>' +
        '<line x1="0" y1="-10" x2="0" y2="8" class="thick"/>' +
        '<circle cx="0" cy="10" r="5" class="thick"/>'
    }
  };

  /* Build a solver system from a flat model description.
   * model = { elements:[{type, nodes:[nodeIndex...], p:{}}], nodeCount }
   */
  function buildSystem(model) {
    var elements = [], fixed = [], i;
    for (i = 0; i < model.elements.length; i++) {
      var e = model.elements[i], def = LIB[e.type];
      if (!def) continue;
      if (def.dirichlet) {
        fixed.push({ node: e.nodes[0], value: num(e.p.T, 25) });
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
  root.NS1D.thermal = { LIB: LIB, buildSystem: buildSystem, SIGMA: SIGMA, K0: K0 };
})(typeof globalThis !== "undefined" ? globalThis : this);

if (typeof module !== "undefined" && module.exports) {
  module.exports = (typeof globalThis !== "undefined" ? globalThis : this).NS1D;
}
