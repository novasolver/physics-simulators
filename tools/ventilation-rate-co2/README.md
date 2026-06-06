# CO₂濃度ベース 必要換気量シミュレーター

人が呼吸で出すCO₂を指標に、部屋に必要な換気量を求めるツールです。在室人数・室容積・目標CO₂濃度を変えると、必要換気量・1人あたり換気量・換気回数ACH・濃度が落ち着くまでの時定数がリアルタイムで分かり、息苦しくない室内環境を設計できます。

**Category:** 空調・HVAC

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ventilation-rate-co2.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ventilation-rate-co2.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ventilation-rate-co2.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ventilation-rate-co2
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
