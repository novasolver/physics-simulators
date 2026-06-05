# Lissajous Figure Generator

Interactive Lissajous curve visualizer. Adjust frequency ratio, amplitude, and phase difference in real-time and watch the figure transform.

🌐 **Live demo:** [novasolver.jp/tools/lissajous.html](https://novasolver.jp/tools/lissajous.html)
🌍 **EN:** [novasolver.jp/en/tools/lissajous.html](https://novasolver.jp/en/tools/lissajous.html)
🌏 **ZH:** [novasolver.jp/zh/tools/lissajous.html](https://novasolver.jp/zh/tools/lissajous.html)

## What is a Lissajous figure?

A Lissajous curve is the trajectory of a point whose motion is the superposition of two perpendicular sinusoidal oscillations:

```
x(t) = Aₓ · sin(2π fₓ t + δ)
y(t) = Aᵧ · sin(2π fᵧ t)
```

When the frequency ratio `fₓ / fᵧ` is a rational number `p/q`, the curve is closed and has `p × q` lobes. Irrational ratios produce quasi-periodic, never-repeating curves that densely fill a rectangle.

## Quick reference

| Ratio fₓ : fᵧ | δ = 0 | δ = π/2 |
|---|---|---|
| 1 : 1 | line | circle |
| 1 : 2 | parabola | figure-8 |
| 2 : 3 | three-loop | five-loop closed |
| 3 : 4 | seven-lobe | eight-lobe |

## Applications

- **Oscilloscope X-Y mode**: identify unknown frequency by matching against reference
- **Audio engineering**: visualize phase relationships between stereo channels
- **Control systems**: detect harmonics and phase lag
- **Physics education**: classic demonstration of harmonic superposition

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fun-physics/lissajous
python -m http.server 8000
# open http://localhost:8000
```

No build step, no dependencies. Just open `index.html` in any modern browser.

## How it works

The simulation:
1. Samples N points evenly in `t ∈ [0, T]` where T is the LCM period
2. Computes `(x, y)` at each sample using the formulas above
3. Renders to canvas as a polyline with color gradient indicating time direction
4. Optional side projections show the individual x(t), y(t) waveforms

## Files

- `index.html` — Self-contained simulator (HTML + CSS + JS + Chart.js)
- `README.md` — This file

## See also

- [Bode plot simulator](../../electromagnetic/bode-plot/) — phase response visualization
- [Fourier epicycles](../fourier-epicycles/) — circular harmonic decomposition
- [String resonance](../../structural/string-resonance/) — standing wave modes

## License

[MIT](../../../LICENSE)
