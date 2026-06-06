# EV 電池 コールドプレート冷却設計 — 流路最適化

Tesla・BYDなどEV用リチウムイオン電池の底面コールドプレート冷却を設計するツールです。CTP/Blade/CTC/モジュール構成と冷却液・流量・プレート形状を変えると、総発熱・冷却液温度上昇・セル最高温度・温度マージン・ポンプ動力がリアルタイムで分かり、40°C以下に収まる安全な熱マネジメントを設計できます。

**Category:** EV 電池・熱管理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ev-battery-cooling-cold-plate.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ev-battery-cooling-cold-plate.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ev-battery-cooling-cold-plate.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ev-battery-cooling-cold-plate
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
