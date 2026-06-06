# ABS アンチロックブレーキ システム シミュレーター — スリップ率制御

ABS（Anti-lock Braking System）が車輪のロックを防ぎながらスリップ率を最適値に保つしくみを、初速・路面・車両質量から実時間で計算します。ロック制動との制動距離比較、μ-s 曲線の動作点、距離短縮率を可視化し、能動安全システムの動作原理を直感的に把握できます。

**Category:** 自動車工学・能動安全

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/anti-lock-braking-abs.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/anti-lock-braking-abs.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/anti-lock-braking-abs.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/anti-lock-braking-abs
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
