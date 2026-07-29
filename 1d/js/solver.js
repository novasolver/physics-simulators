/* NovaSolver 1D — numerical core.
 * Pure functions only: no DOM, no globals. This file is the piece that will later be
 * replaced by a Rust/C++ -> WASM build; keep the public API (solveSteady/solveTransient)
 * stable so the UI never has to change.
 *
 * Formulation: residual + Jacobian (Newton). Every component stamps
 *   F[i] += net flow OUT of node i        (W for thermal)
 *   J[i][j] += dF[i]/dT[j]
 * so nonlinear elements (radiation, temperature-dependent properties) need no special case.
 * Dirichlet nodes are imposed by row replacement after assembly.
 */
(function (root) {
  "use strict";

  /* ---------- dense LU with partial pivoting (n up to a few hundred) ---------- */
  function luDecompose(A, n) {
    var piv = new Int32Array(n), i, j, k;
    for (i = 0; i < n; i++) piv[i] = i;
    for (k = 0; k < n; k++) {
      var max = Math.abs(A[k][k]), row = k;
      for (i = k + 1; i < n; i++) {
        var v = Math.abs(A[i][k]);
        if (v > max) { max = v; row = i; }
      }
      if (max < 1e-14) return null;               // singular
      if (row !== k) {
        var t = A[k]; A[k] = A[row]; A[row] = t;
        var tp = piv[k]; piv[k] = piv[row]; piv[row] = tp;
      }
      var akk = A[k][k];
      for (i = k + 1; i < n; i++) {
        var f = A[i][k] / akk;
        A[i][k] = f;
        if (f !== 0) for (j = k + 1; j < n; j++) A[i][j] -= f * A[k][j];
      }
    }
    return { LU: A, piv: piv };
  }

  function luSolve(dec, b, n) {
    var LU = dec.LU, piv = dec.piv, x = new Float64Array(n), i, j, s;
    for (i = 0; i < n; i++) x[i] = b[piv[i]];
    for (i = 1; i < n; i++) {                     // forward (unit lower)
      s = x[i];
      for (j = 0; j < i; j++) s -= LU[i][j] * x[j];
      x[i] = s;
    }
    for (i = n - 1; i >= 0; i--) {                // back substitution
      s = x[i];
      for (j = i + 1; j < n; j++) s -= LU[i][j] * x[j];
      x[i] = s / LU[i][i];
    }
    return x;
  }

  function zeros2(n) {
    var A = new Array(n);
    for (var i = 0; i < n; i++) A[i] = new Float64Array(n);
    return A;
  }

  /* ---------- assembly ----------
   * sys = {
   *   n:            number of nodes,
   *   elements:     [{ type, nodes:[i,..], p:{...}, stamp(ctx, el) }],
   *   fixed:        [{ node, value }]
   * }
   * ctx = { J, F, T, Tprev, dt, transient }
   */
  function assemble(sys, T, Tprev, dt) {
    var n = sys.n, J = zeros2(n), F = new Float64Array(n);
    var ctx = { J: J, F: F, T: T, Tprev: Tprev, dt: dt, transient: dt > 0 };
    for (var e = 0; e < sys.elements.length; e++) {
      var el = sys.elements[e];
      if (el.stamp) el.stamp(ctx, el);
    }
    // Dirichlet: replace row -> T[node] - value = 0
    for (var d = 0; d < sys.fixed.length; d++) {
      var f = sys.fixed[d], i = f.node;
      if (i < 0 || i >= n) continue;
      J[i].fill(0);
      J[i][i] = 1;
      F[i] = T[i] - f.value;
    }
    return { J: J, F: F };
  }

  /* ---------- Newton ---------- */
  function newton(sys, T0, Tprev, dt, opt) {
    opt = opt || {};
    var tol = opt.tol || 1e-8, maxIt = opt.maxIter || 60, n = sys.n;
    var T = Float64Array.from(T0), it, i;
    for (it = 0; it < maxIt; it++) {
      var a = assemble(sys, T, Tprev, dt);
      var dec = luDecompose(a.J, n);
      if (!dec) {
        return { ok: false, reason: "singular",
                 T: T, iterations: it };
      }
      var rhs = new Float64Array(n);
      for (i = 0; i < n; i++) rhs[i] = -a.F[i];
      var dT = luSolve(dec, rhs, n);
      var norm = 0, scale = 0;
      for (i = 0; i < n; i++) {
        var ad = Math.abs(dT[i]);
        if (ad > norm) norm = ad;
        var at = Math.abs(T[i]);
        if (at > scale) scale = at;
      }
      // damping keeps radiation-dominated systems from overshooting
      var relax = norm > 100 ? 100 / norm : 1;
      for (i = 0; i < n; i++) T[i] += relax * dT[i];
      if (norm <= tol * Math.max(1, scale)) {
        return { ok: true, T: T, iterations: it + 1, residual: norm };
      }
    }
    return { ok: false, reason: "no-convergence", T: T, iterations: maxIt };
  }

  /* ---------- public API ---------- */
  function solveSteady(sys, opt) {
    var T0 = new Float64Array(sys.n);
    var guess = (opt && opt.initial) != null ? opt.initial : 25;
    T0.fill(guess);
    for (var d = 0; d < sys.fixed.length; d++) T0[sys.fixed[d].node] = sys.fixed[d].value;
    return newton(sys, T0, null, 0, opt);
  }

  /* Backward Euler. Unconditionally stable, so a stiff thermal net (ms electronics +
   * hour-scale mass) will not blow up even at coarse dt. */
  function solveTransient(sys, opt) {
    opt = opt || {};
    var dt = opt.dt || 1, steps = opt.steps || 100, n = sys.n;
    var T = new Float64Array(n);
    if (opt.initial != null && opt.initial.length === n) T.set(opt.initial);
    else T.fill(opt.initialUniform != null ? opt.initialUniform : 25);
    for (var d = 0; d < sys.fixed.length; d++) T[sys.fixed[d].node] = sys.fixed[d].value;

    var times = [0], hist = [Float64Array.from(T)], k;
    for (k = 1; k <= steps; k++) {
      var res = newton(sys, T, T, dt, opt);
      if (!res.ok) return { ok: false, reason: res.reason, times: times, history: hist, step: k };
      T = res.T;
      times.push(k * dt);
      hist.push(Float64Array.from(T));
    }
    return { ok: true, times: times, history: hist };
  }

  /* Heat flow through one two-node element, for post-processing / balance checks. */
  function elementFlow(el, T) {
    if (!el.flow) return null;
    return el.flow(T, el);
  }

  root.NS1D = root.NS1D || {};
  root.NS1D.solver = {
    solveSteady: solveSteady,
    solveTransient: solveTransient,
    elementFlow: elementFlow,
    _luDecompose: luDecompose,
    _luSolve: luSolve,
    _assemble: assemble
  };
})(typeof globalThis !== "undefined" ? globalThis : this);

if (typeof module !== "undefined" && module.exports) {
  module.exports = (typeof globalThis !== "undefined" ? globalThis : this).NS1D;
}
