# ビンガム塑性流体 シミュレーター — 降伏応力を持つ非ニュートン流体

ビンガム塑性モデル $\tau = \tau_y + \mu_p\,\dot{\gamma}$ に基づき、せん断応力 $\tau$、見かけ粘性 $\mu_{\text{app}}$、ビンガム数 $Bi$、BP Reynolds 数を実時間計算します。降伏応力 $\tau_y$、塑性粘性 $\mu_p$、せん断速度 $\dot{\gamma}$、流体密度 $\rho$ をスライダーで変えて、歯磨き粉・ペンキ・生コンクリート・ドリリングマッドのような降伏応力流体の流動曲線とプラグ流を含む円管速度プロファイルを可視化します。

**Category:** 非ニュートン流体シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bingham-fluid.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bingham-fluid.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bingham-fluid.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bingham-fluid
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
