# 冪乗則流体 シミュレーター — 非ニュートン流体の Ostwald-de Waele モデル

Ostwald-de Waele 冪乗則 $\tau = K\,\dot{\gamma}^{n}$ に基づき、せん断応力 $\tau$、見かけ粘性 $\mu_{\text{app}}$、円管内見かけ Reynolds 数を実時間計算します。稠度係数 $K$、冪指数 $n$、せん断速度 $\dot{\gamma}$、流体密度 $\rho$ をスライダーで変えて、shear-thinning（擬塑性）／Newtonian／shear-thickening（ダイラタント）の流動曲線と速度プロファイルを比較可視化します。

**Category:** 非ニュートン流体シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/power-law-fluid.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/power-law-fluid.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/power-law-fluid.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/power-law-fluid
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
