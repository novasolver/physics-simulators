# ラグランジュ未定乗数法シミュレーター

等式制約のもとで目的関数を最適化する「ラグランジュ未定乗数法」を可視化するツールです。目的関数の係数・制約条件・最小化／最大化を変えると、目的関数の等高線と制約曲線が接する最適点、ラグランジュ乗数 λ、感度（シャドープライス）がリアルタイムで分かります。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lagrange-multiplier-optimization.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lagrange-multiplier-optimization.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lagrange-multiplier-optimization.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lagrange-multiplier-optimization
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
