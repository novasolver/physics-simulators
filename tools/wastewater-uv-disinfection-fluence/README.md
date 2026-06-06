# 下水 UV 消毒 フルエンス設計シミュレーター

下水・排水を 254 nm UV-C で消毒するリアクタを設計するツールです。流量・UVT・ランプ種別・本数・反応器長・標的菌を変えると、平均 UV 強度・滞留時間・UV 線量(フルエンス)・log 減少・消費電力比がリアルタイムで更新され、塩素フリーで安全な不活化条件を探せます。

**Category:** 水処理・UV 消毒

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wastewater-uv-disinfection-fluence.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wastewater-uv-disinfection-fluence.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wastewater-uv-disinfection-fluence.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wastewater-uv-disinfection-fluence
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
