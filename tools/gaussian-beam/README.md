# ガウシアンビーム シミュレーター — レーザービームの伝播

波長 λ・ビームウエスト w₀・伝播距離 z・ビーム品質 M² から、現在位置のビーム半径 w(z)・レイリー長 z_R・遠方発散半角 θ・1 m 先のビーム直径を実時間計算します。ビーム包絡線（双曲線）と現在 z での円形断面強度分布（ガウス）を同時に可視化し、レーザー光学を直感的に学べます。

**Category:** 光学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gaussian-beam.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gaussian-beam.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gaussian-beam.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gaussian-beam
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
