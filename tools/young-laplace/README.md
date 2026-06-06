# ヤング・ラプラス シミュレーター — 表面張力と毛細管現象

表面張力 γ・曲率半径 R・接触角 θ・密度 ρ から、球面液滴のラプラス圧 ΔP = 2γ/R、円柱液柱 ΔP = γ/R、シャボン玉 ΔP = 4γ/R、ジューランの毛細管上昇 h、ボンド数 Bo をリアルタイムに計算します。液滴・毛細管・シャボン玉の模式図と R-ΔP 比較曲線で、界面物理を直感的に学べます。

**Category:** 表面・界面シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/young-laplace.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/young-laplace.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/young-laplace.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/young-laplace
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
