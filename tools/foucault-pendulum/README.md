# フーコー振り子 シミュレーター — 自転による歳差

緯度・振り子長さ・重力加速度・経過時間を変えて、フーコー振り子の振動面が地球自転によってゆっくり回転していく様子を可視化。Ω·sinφ から歳差角速度と一回転時間をリアルタイム計算します。

**Category:** 古典力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/foucault-pendulum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/foucault-pendulum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/foucault-pendulum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/foucault-pendulum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
