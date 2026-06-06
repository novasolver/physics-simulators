# 潮流発電タービン Cp・TSR シミュレーター — Lanchester-Betz

潮流発電タービンの心臓部「出力係数 Cp」と「翼端速度比 TSR」を、水平軸 HATT・垂直軸 Darrieus / Savonius・ダクト付の 4 形式で比較します。Lanchester-Betz 限界 16/27 ≈ 59.3% に対してどこまで出力を引き出せるか、抽出出力 kW・年間発電量 MWh・キャビテーション σ までリアルタイムに評価できます。

**Category:** 海洋再生エネ・潮流発電

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tidal-stream-turbine-cp.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tidal-stream-turbine-cp.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tidal-stream-turbine-cp.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tidal-stream-turbine-cp
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
