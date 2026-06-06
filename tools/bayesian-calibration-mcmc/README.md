# ベイズ校正 MCMC シミュレーター

事前分布・尤度・観測データを与えて、CAEモデルのパラメータをベイズ流に校正するツールです。共役正規モデルの解析事後分布をリアルタイム計算し、Metropolis–Hastings法の受理率と有効サンプル数 (ESS) を同時に評価して、UQ／モデル較正の感覚をつかめます。

**Category:** 不確かさ定量化 (UQ)

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bayesian-calibration-mcmc.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bayesian-calibration-mcmc.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bayesian-calibration-mcmc.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bayesian-calibration-mcmc
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
