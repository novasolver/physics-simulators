# ガウシアン ナイーブベイズ分類シミュレーター — 2D 3クラス

2特徴量のガウシアン ナイーブベイズ分類器を可視化。各クラスの 1D 正規分布を独立と仮定し、対数事後を最大にするクラスを予測。決定境界と事後確率がリアルタイムに変化します。

**Category:** 機械学習シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/naive-bayes.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/naive-bayes.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/naive-bayes.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/naive-bayes
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
