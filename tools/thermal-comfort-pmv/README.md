# 温熱快適性（PMV-PPD）シミュレーター

「暑い・寒い」を数値化するFangerの温熱快適モデル（ISO 7730）のツールです。空気温度・放射温度・気流・湿度・代謝量・着衣量の6要素を変えると、予測平均申告PMVと予測不満足率PPD、作用温度がリアルタイムで分かり、快適なオフィス・住宅の空調を設計できます。

**Category:** 建築環境

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thermal-comfort-pmv.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thermal-comfort-pmv.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thermal-comfort-pmv.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thermal-comfort-pmv
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
