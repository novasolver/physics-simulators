# 化学量論空燃比（理論空燃比）シミュレーター

炭化水素燃料 CxHyOz を完全燃焼させるのに「ちょうど必要な空気量」を計算するツールです。炭素数・水素数・等量比 φ を変えると、モル基準と質量基準の空燃比、過剰空気率、混合気がリッチかリーンかの判定がリアルタイムで分かります。

**Category:** 燃焼工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/stoichiometric-air-fuel-ratio.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/stoichiometric-air-fuel-ratio.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/stoichiometric-air-fuel-ratio.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/stoichiometric-air-fuel-ratio
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
