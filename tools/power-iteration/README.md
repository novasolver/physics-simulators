# べき乗法シミュレーター — 最大固有値の反復計算

3×3対称行列に v ← Av/‖Av‖ を繰り返し、最大絶対値固有値と固有ベクトルを推定。Rayleigh商で固有値を読み、収束比 |λ₂/λ₁| が決める収束速度を体感できます。

**Category:** 数値線形代数シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/power-iteration.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/power-iteration.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/power-iteration.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/power-iteration
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
