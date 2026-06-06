# Elastic Net 回帰 シミュレーター — L1+L2 ハイブリッド正則化

Elastic Net 回帰（Zou &amp; Hastie 2005）の L1/L2 混合比 α と正則化強度 λ を変えると、選択される特徴数・有効自由度・真陽性率／偽陽性率・MSE がリアルタイムで変化します。Lasso と Ridge の中間で「相関特徴のグループ化」が起きる仕組みを体感できる学習ツールです。

**Category:** 機械学習・統計回帰

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/elastic-net-regression.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/elastic-net-regression.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/elastic-net-regression.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/elastic-net-regression
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
