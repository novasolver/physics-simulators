# NovaSolver 1D — Thermal Network Simulator

A 1D system-simulation engine that runs entirely in the browser. The first component
library is a **thermal network (thermal circuit) solver**: wire up thermal resistances,
capacitances, heat sources, convection and radiation like a circuit schematic, and every
node temperature is computed as you edit.

**Live app:** https://novasolver.jp/en/1d/thermal-network.html
(日本語版: https://novasolver.jp/1d/thermal-network.html)

No install, no signup, no server round-trips — all computation happens on your device
and the model never leaves it.

## How it works

The core observation is that thermal, fluid and electrical networks share one
mathematical structure: conservation at every node plus a constitutive law on every
branch. The solver is therefore domain-agnostic; each domain is just a component
library that knows how to *stamp* its residual and Jacobian contributions.

| File | Role |
|---|---|
| `js/solver.js` | Numerical core. Pure functions, no DOM. Newton's method on a residual + Jacobian formulation, dense LU with partial pivoting, backward Euler for transients. Public API: `solveSteady(sys, opt)` / `solveTransient(sys, opt)`. |
| `js/lib-thermal.js` | Thermal component library: R (conduction), h·A (convection), ε·A (radiation, nonlinear T⁴), C (capacitance), P (heat source), T (fixed temperature via row replacement). Adding a new domain = adding another file like this one. |
| `js/model.js` | Schematic data model: components + wires, node derivation via union-find, undo/redo, JSON I/O, pre-solve diagnostics. |
| `js/editor.js` | SVG schematic editor: drag-and-drop placement, pin-to-pin wiring (drag or click-click), rotation, pan/zoom. Re-solves on every edit — there is no "run" button. |
| `js/verify.js` | Six verification cases against analytic solutions (series/parallel resistance, convective boundary, lumped-capacitance transient, energy conservation, radiation equilibrium). Runs headless: `node js/verify.js` → `ALL PASS (6)`. Also re-run in the browser on every page load and displayed to the user. |
| `js/app.js` | Application shell: palette, parameter panel, transient plot, energy-balance table, examples. UI strings are bilingual (JA/EN) via `window.NS1D_LANG`. |

### The stamp contract

```js
// ctx = { J, F, T, Tprev, dt, transient }
// F[i] += net flow OUT of node i;  J[i][j] += dF[i]/dT[j]
```

Radiation is the nonlinear case: `q = εσA(Ta⁴ − Tb⁴)` contributes `4εσA·T³` terms to
the Jacobian, and Newton iteration handles it together with everything else.
Backward Euler is unconditionally stable, so stiff systems (millisecond component time
constants next to hour-scale chassis thermal mass) solve with large time steps.

## Verification

Every case is checked against a closed-form solution and the comparison is shown to the
user on every page load — we think the main reason free solvers don't get used
professionally is that nobody can tell whether to trust them. Current status:
6/6 PASS, worst relative error ~1e-15 (steady) / O(Δt) as expected for backward Euler
(transient).

```
$ node js/verify.js
PASS series      ...
PASS parallel    ...
PASS convection  ...
PASS transient   ...
PASS energy      ...
PASS radiation   got=82.251209 exact=82.251209 rel=6.91e-16
ALL PASS (6)
```

## Scope and roadmap

This solves **lumped-parameter (1D) networks** — it will not give you temperature
fields inside a part or resolve a flow field. It is meant for the system-level sizing
you do *before* committing to 3D CFD/FEA.

Roadmap: fluid branch (piping networks, Darcy–Weisbach), thermal–fluid coupling
(cooling loops), electrical branch, sparse solver for large models.

## License

MIT (same as the rest of this repository).
