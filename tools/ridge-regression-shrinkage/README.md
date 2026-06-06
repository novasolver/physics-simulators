# Ridge回帰 シュリンクシミュレーター

Ridge回帰（Tikhonov 正則化、L2正則化）の正則化強度 λ を変えると、有効自由度・係数のシュリンク・バイアスと分散の分解・OLS との MSE 比較がリアルタイムで変化します。多重共線性や高次元データで「なぜ Ridge が OLS より優れるのか」を体感できます。

**Category:** 機械学習・統計回帰

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ridge-regression-shrinkage.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ridge-regression-shrinkage.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ridge-regression-shrinkage.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ridge-regression-shrinkage
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
