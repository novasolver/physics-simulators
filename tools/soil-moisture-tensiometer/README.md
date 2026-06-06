# 土壌水分テンシオメータ・van Genuchten シミュレーター

土壌水分張力（マトリックポテンシャル）と van Genuchten モデルから含水率・圃場容水量 FC・永久萎凋点 PWP・有効水分 AWC・利用可能水深を計算。砂質土／壌土／粘土質など5土壌と作物別の灌漑開始閾値で、テンシオメータを使った灌漑設計が学べる無料シミュレーターです。

**Category:** 農業・水文・土壌物理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/soil-moisture-tensiometer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/soil-moisture-tensiometer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/soil-moisture-tensiometer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/soil-moisture-tensiometer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
