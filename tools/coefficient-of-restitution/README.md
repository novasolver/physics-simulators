# 反発係数 シミュレーター — 跳ね返るボールの減衰

初期高さ h・反発係数 e・重力加速度 g・跳ね回数 n から、着地時速度・n 回後の跳ね高さ・全跳ね時間・全鉛直移動距離を実時間に計算します。床上を跳ねるボールの軌跡と h_n = h·e^(2n) の幾何級数減衰を可視化し、衝突力学を直感的に学べます。

**Category:** 衝突力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/coefficient-of-restitution.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/coefficient-of-restitution.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/coefficient-of-restitution.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/coefficient-of-restitution
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
