# 交差エントロピー vs MSE 損失シミュレーター

二値分類の損失関数を比較するシミュレーター。ロジット z と正解ラベル y を変えると、交差エントロピー損失とMSE損失、そして勾配がリアルタイムで分かります。確信を持って間違えたときMSE勾配が消失し、交差エントロピーが分類で標準損失となる理由を直感的に学べる無料ツールです。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cross-entropy-vs-mse.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cross-entropy-vs-mse.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cross-entropy-vs-mse.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cross-entropy-vs-mse
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
