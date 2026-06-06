# FPV ドローン 映像遅延・FPS バジェット シミュレーター

FPV ドローンの映像遅延（センサー→エンコーダ→電波→デコーダ→ディスプレイ）と必要帯域、距離マージン、操縦者の総反応時間をリアルタイムで見積もるツールです。アナログ 5.8GHz・DJI O3・HDZero・Walksnail Avatar を切り替えて、Race／Freestyle／Cinematic／Casual のどのクラスに収まるか確認できます。

**Category:** FPV・ビデオ伝送

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/drone-fpv-latency-fps-budget.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/drone-fpv-latency-fps-budget.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/drone-fpv-latency-fps-budget.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/drone-fpv-latency-fps-budget
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
