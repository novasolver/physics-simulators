# 1D有限体積法シミュレーター — 定常拡散

1次元の定常拡散方程式を有限体積法（FVM）で解くツールです。領域を制御体積セルに分け、各セルでフラックスの収支を取って三重対角行列を組み立て、Thomas法で求解します。制御体積数や発生項を変えると、セル中心のφ分布・解析解との誤差・収束の様子がリアルタイムで分かります。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/finite-volume-1d.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/finite-volume-1d.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/finite-volume-1d.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/finite-volume-1d
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
