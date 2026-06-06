# 状態空間 可観測性シミュレーター

2次の線形時不変系 ẋ=Ax+Bu, y=Cx について「測定できる出力 y だけから内部状態 x をすべて知れるか」を判定するツールです。システム行列 A とセンサ行ベクトル C を変えると、可観測行列 O=[C;CA] の行列式とランクがリアルタイムで分かり、状態推定が成立する設計を探せます。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/observability-check.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/observability-check.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/observability-check.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/observability-check
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
