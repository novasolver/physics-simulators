# ヤコビ反復法シミュレーター — 連立一次方程式

2元連立一次方程式 A·x=b をヤコビ反復法で解くツールです。係数行列と右辺、反復回数を変えると、対角優位性とスペクトル半径から収束するか発散するかが判定され、誤差の収束曲線・反復値の推移・2直線と反復点列がリアルタイムで見えます。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/jacobi-iteration.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/jacobi-iteration.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/jacobi-iteration.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/jacobi-iteration
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
