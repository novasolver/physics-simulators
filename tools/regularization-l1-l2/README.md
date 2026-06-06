# L1/L2正則化シミュレーター — LassoとRidge

機械学習の過学習を抑える2つの正則化、L1（Lasso）とL2（Ridge）の挙動を可視化するツールです。正則化強度λと元の回帰係数を変えると、L1が重みをちょうど0にしてスパースなモデルを作り、L2が全係数を比例縮小する様子をリアルタイムで比較できます。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/regularization-l1-l2.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/regularization-l1-l2.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/regularization-l1-l2.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/regularization-l1-l2
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
