# 橋梁桁 フラッタ空力不安定 — タコマナローズ教訓

長大橋の桁断面に発生する空力不安定振動（フラッタ）と渦励振の臨界風速をリアルタイム計算するツールです。橋種・径間長・桁幅・桁高・固有振動数を変えて、設計風速に対する余裕度や渦放出周波数のロックインを評価し、タコマナローズ橋崩落の教訓を踏まえた耐風設計の感覚を身につけられます。

**Category:** 橋梁空力・耐風設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bridge-deck-flutter-aerodynamic.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bridge-deck-flutter-aerodynamic.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bridge-deck-flutter-aerodynamic.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bridge-deck-flutter-aerodynamic
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
