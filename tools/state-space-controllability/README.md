# 状態空間 可制御性シミュレーター

2次の線形時不変システム ẋ=Ax+Bu について、入力 u だけで状態空間のすべての方向を動かせるか（可制御性）を判定するツールです。システム行列 A と入力ベクトル B を変えると、可制御行列 𝒞=[B AB]・その行列式・ランク・可制御判定がリアルタイムで分かります。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/state-space-controllability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/state-space-controllability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/state-space-controllability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/state-space-controllability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
