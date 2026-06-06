# ウォマーズレー数 シミュレーター — 拍動血流の特性数

ウォマーズレー数 α=R√(ωρ/μ) をインタラクティブに計算。血管半径 R、心拍周波数 f、血液密度 ρ、動粘性 μ を変えて、準定常・過渡・慣性支配の流動領域、粘性侵入深さ δ、ピーク Reynolds 数、円管断面の拍動速度プロファイルを同時に可視化します。

**Category:** バイオメカニクスシミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/womersley-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/womersley-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/womersley-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/womersley-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
