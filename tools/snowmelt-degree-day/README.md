# 融雪 Degree-Day シミュレーター — 山岳水文学

日平均気温と融雪係数から、山岳流域の日融雪量・融雪流量・SWE 枯渇日数を Degree-Day（度・日）法で推定するツールです。流域面積と SWE を変えれば、雪解け洪水のピーク流量やダム流入量の見積もりにそのまま使えます。

**Category:** 水文・環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/snowmelt-degree-day.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/snowmelt-degree-day.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/snowmelt-degree-day.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/snowmelt-degree-day
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
