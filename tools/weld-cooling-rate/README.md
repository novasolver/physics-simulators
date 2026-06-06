# 溶接 HAZ 冷却速度（Rosenthal-Adams）シミュレーター

アーク溶接で生じる熱影響部（HAZ）の冷却速度を、Rosenthal-Adams の解析解で計算するツールです。入熱量・予熱温度・板厚を変えると、540 °C 通過時の冷却速度と厚板／薄板の支配領域がリアルタイムで分かり、マルテンサイト硬化や低温割れを避ける施工条件を探せます。

**Category:** 溶接工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/weld-cooling-rate.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/weld-cooling-rate.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/weld-cooling-rate.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/weld-cooling-rate
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
