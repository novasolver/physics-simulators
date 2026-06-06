# 外壁風雨荷重 WDR シミュレーター — 建物ファサード設計

風と雨が同時に建物外壁を直撃する「風駆動降雨 (Wind-Driven Rain, WDR)」を Choi (1994) の経験式で評価し、ファサードの水分流束・風圧・吸水量・浸透深さをリアルタイムに計算します。煉瓦・コンクリート・ALC・金属パネル・カーテンウォールごとの吸水挙動を比較し、防水設計と材料選定の最初の当たりをつけられます。

**Category:** 建築設計・防水

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wind-driven-rain-facade.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wind-driven-rain-facade.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wind-driven-rain-facade.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wind-driven-rain-facade
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
