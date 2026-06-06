# 線形SVMシミュレーター — ソフトマージン2D分類

劣勾配降下法でヒンジ損失と L2 正則化を最小化し、最大マージン分離直線を学習。サポートベクターと、正則化係数 C やノイズが決定境界に与える影響を直感的に学べる機械学習可視化ツールです。

**Category:** 機械学習シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/linear-svm.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/linear-svm.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/linear-svm.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/linear-svm
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
