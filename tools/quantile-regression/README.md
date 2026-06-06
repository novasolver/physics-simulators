# 分位点回帰 シミュレーター — OLS との比較

分位点回帰（Quantile Regression, Koenker 1978）を OLS と比較するインタラクティブシミュレーター。サンプル数・τ・雑音分布・外れ値割合を変えて、QR と OLS の傾き・標準誤差・効率比を可視化。所得分布・VaR・極値解析で標準の手法を Pin-ball loss と共に学べる無料ツール。

**Category:** 統計回帰・ロバスト推定

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/quantile-regression.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/quantile-regression.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/quantile-regression.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/quantile-regression
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
