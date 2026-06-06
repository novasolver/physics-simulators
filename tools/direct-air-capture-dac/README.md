# 直接大気回収 DAC シミュレーター

大気から直接 CO₂ を回収する Negative Emissions Technology（NET）の設計ツールです。液体溶媒・固体アミン・湿度スイング・極低温分離の 4 方式から選び、年間目標捕集量と空気流量・電力単価を変えると、必要空気流量・年間電力・LCOA（CO₂ 回収単価）・大気 CO₂ 濃度低減効果がリアルタイムで分かります。

**Category:** 気候工学・CCUS

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/direct-air-capture-dac.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/direct-air-capture-dac.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/direct-air-capture-dac.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/direct-air-capture-dac
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
