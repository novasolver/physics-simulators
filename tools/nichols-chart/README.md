# ニコルス線図シミュレーター

開ループ伝達関数の周波数応答を、位相（横軸）とゲイン（縦軸）の1枚の図にまとめて描くツールです。ゲインや時定数、むだ時間を変えると、ゲイン余裕・位相余裕・共振ピークがリアルタイムで分かり、閉ループ系がどれだけ安定かを直感的に検討できます。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/nichols-chart.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/nichols-chart.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/nichols-chart.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/nichols-chart
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
