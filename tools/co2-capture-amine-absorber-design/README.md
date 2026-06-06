# CCS アミン吸収塔 設計シミュレーター

火力発電所・製鉄所・セメント工場の排ガスからCO2を化学的に取り除く「アミン吸収塔」を設計するツールです。排ガス流量・CO2濃度・回収率と4種類のアミン（MEA／KS-1／ピペラジン／MDEA+PZ）を切り替えると、必要な塔径・塔高・アミン循環量・再生熱負荷・$/t-CO2の捕集コストがリアルタイムで分かります。

**Category:** CCS・アミン吸収

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/co2-capture-amine-absorber-design.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/co2-capture-amine-absorber-design.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/co2-capture-amine-absorber-design.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/co2-capture-amine-absorber-design
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
