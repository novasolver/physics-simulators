# 三相誘導電動機シミュレーター

三相誘導電動機の特性をブラウザ上で解析できるCAEシミュレーターです。等価回路パラメータを入力するだけで、トルク-速度特性や効率、力率、電流をリアルタイムに計算・可視化。Y-Δ始動やインバータ制御の影響もシミュレーション可能で、電動機の設計・学習を強力にサポートします。

**Category:** 電気機械・電力工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/induction-motor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/induction-motor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/induction-motor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/induction-motor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
