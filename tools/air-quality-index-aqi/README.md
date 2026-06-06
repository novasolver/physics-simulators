# 大気質指数 (AQI) シミュレーター — US EPA 方式

PM2.5・PM10・オゾン・NO2・SO2 の濃度を入力すると、US EPA 方式の区間線形補間で大気質指数 (AQI) を計算します。総合 AQI、健康影響カテゴリ、主要汚染物質、各物質の寄与をリアルタイムで可視化します。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/air-quality-index-aqi.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/air-quality-index-aqi.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/air-quality-index-aqi.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/air-quality-index-aqi
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
