# 外壁駆動雨 WDR ファサード負荷シミュレーター

風が水平方向に運ぶ雨（Wind-Driven Rain）が建物外壁に与える負荷をリアルタイム計算します。雨量・風速・風向・建物高さ・地形・ファサード材を変えると、WDR強度、ファサード動圧、ASTM E331／AAMA 501.1 試験圧との余裕がその場で更新され、レインスクリーンやシール設計の判断材料になります。

**Category:** 建築外皮・防水設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wind-driven-rain-facade-load.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wind-driven-rain-facade-load.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wind-driven-rain-facade-load.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wind-driven-rain-facade-load
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
