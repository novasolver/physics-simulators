# SOR法（逐次過緩和法）シミュレーター

1次元ラプラス方程式を反復解法で解くツールです。緩和係数ωを変えると、Gauss-Seidel法の更新を「行き過ぎ気味」に増幅することで収束がどれだけ速くなるか、また最適ωと残差の減衰がリアルタイムで分かります。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sor-relaxation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sor-relaxation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sor-relaxation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sor-relaxation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
