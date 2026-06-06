# 地中熱ヒートポンプ GSHP ボアホール設計シミュレーター

地中熱ヒートポンプ (Ground-Source Heat Pump, GSHP) のボアホール熱交換器を ASHRAE/IGSHPA 簡易法で設計します。建物の暖房・冷房負荷、地盤熱伝導率、地中温度、年間運転時間、1 孔深さを入力すると、必要総ボアホール長・孔数・敷地面積・COP・年間 CO₂ 削減量がリアルタイムに更新されます。

**Category:** HVAC・地中熱

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ground-source-heat-pump-gshp.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ground-source-heat-pump-gshp.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ground-source-heat-pump-gshp.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ground-source-heat-pump-gshp
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
