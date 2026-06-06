# 極値統計 GEV シミュレーター — 100年確率と再現期間

一般化極値分布（GEV）で「100年に1回の値」「30年の供用期間中にそれを超える確率」を計算するツールです。位置 μ・スケール σ・形状 ξ を変えると Gumbel／Fréchet／Weibull の3族が切り替わり、再現期間 T 年に対応する極値 z_T と 95% 信頼区間がリアルタイムで分かります。

**Category:** 統計・信頼性工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/extreme-value-gev.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/extreme-value-gev.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/extreme-value-gev.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/extreme-value-gev
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
