# NovaSolver — Interactive Physics & Engineering Simulators

[![Live site](https://img.shields.io/badge/live-novasolver.jp-blue)](https://novasolver.jp/tools/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**1600+ interactive simulators covering structural mechanics, fluid dynamics, heat transfer, electromagnetics, and more.**
All run entirely in your browser with no installation, no signup, and no server-side computation.

→ Try them live at **[novasolver.jp/tools/](https://novasolver.jp/tools/)**

---

## What is this?

NovaSolver provides browser-based simulators for engineers, students, and researchers learning CAE (Computer-Aided Engineering) and physics. Each tool implements a well-known equation or model — Euler-Bernoulli beam, Reynolds number, Lissajous figures, RC/RL transients, FFT spectrum, Mohr's circle, and 1600+ more — with real-time visualization driven by sliders.

The mission: **make every closed-form result in classical engineering interactive**, so the path from "I read the equation" → "I see how parameters change the answer" takes 5 seconds, not a Matlab session.

## Categories

| Category | Count | Examples |
|---|---|---|
| Structural mechanics | 360+ | beam deflection, buckling, fatigue (Goodman, Paris), Mohr's circle |
| Fluid dynamics | 330+ | Reynolds, Bernoulli, flow around cylinder, potential flow |
| Heat transfer | 240+ | 2D heat diffusion, fin efficiency, Stefan-Boltzmann |
| Electromagnetics | 280+ | RC/RL circuits, Bode plots, antenna gain, FDTD |
| Coupled multi-physics | 240+ | thermal-structural, electrochemical |
| Physics & math fun | 100+ | Lissajous, Lorenz attractor, boids, double pendulum chaos |

## Architecture

- **Pure static HTML + Vanilla JS** (no React/Vue). Renders to canvas + Chart.js.
- **MathJax** for LaTeX equations.
- **No backend** for simulation — everything client-side.
- **Multilingual**: JA / EN / ZH-Hans versions of every page.
- **i18n**: `hreflang` properly set; canonical / OG / structured data per language.

## Tool repository structure (this repo)

```
tools/
  structural/
    beam-deflection/
      index.html      ← simulator code
      README.md       ← derivation, usage, references
      LICENSE
    ...
  fluid/
  thermal/
  electromagnetic/
  coupled/
  fun-physics/
```

Each tool folder is self-contained: drop it on any static host and it runs.

## Quick start

Clone this repo and serve any tool folder:

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/structural/beam-deflection
python -m http.server 8000
# open http://localhost:8000
```

## Contributing

PRs welcome. Particularly:
- Bug reports for incorrect physics
- New tool proposals (see `CONTRIBUTING.md`)
- Translations beyond JA/EN/ZH

## Citation

If NovaSolver helped your teaching or research:

```bibtex
@misc{novasolver2026,
  title = {NovaSolver: Interactive Physics and Engineering Simulators},
  url = {https://novasolver.jp},
  year = {2026},
}
```

## License

[MIT](LICENSE)

## Live demos

→ **[novasolver.jp/tools/](https://novasolver.jp/tools/)**
