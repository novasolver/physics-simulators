# SGLD ストキャスティック勾配ランジュバン シミュレーター

SGD に Brownian 雑音を加えるだけで Bayesian 事後分布をサンプリングする SGLD (Welling & Teh 2011) を、ステップサイズ・バッチサイズ・雑音強度・データ規模の 6 つのスライダーで操作できるツールです。確率的バイアスとランジュバンノイズのトレードオフ、有効サンプル数 ESS、混合時間、Gelman-Rubin R̂ がリアルタイムで更新され、Bayesian 深層学習のサンプラー設計を直感的に学べます。

**Category:** ベイズ深層学習・MCMC

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/stochastic-gradient-langevin.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/stochastic-gradient-langevin.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/stochastic-gradient-langevin.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/stochastic-gradient-langevin
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
