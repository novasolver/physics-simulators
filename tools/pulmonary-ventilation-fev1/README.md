# 肺機能検査 FEV1/FVC・COPD GOLD 重症度シミュレーター

スパイロメトリーで測定した FEV1・FVC から、GLI 2012 / Knudson 予測式に基づく予測値、% 予測値、FEV1/FVC 比、COPD GOLD 病期 (1〜4)、拘束性換気障害の疑いを自動判定する無料の肺機能評価シミュレーターです。

**Category:** 医工学・呼吸器

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pulmonary-ventilation-fev1.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pulmonary-ventilation-fev1.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pulmonary-ventilation-fev1.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pulmonary-ventilation-fev1
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
