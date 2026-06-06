# 熱機械疲労 TMF シミュレーター — In-phase/Out-of-phase 寿命予測

ガスタービン動翼に代表される、高温と機械応力が同時に繰り返される熱機械疲労（TMF）の寿命を見積もるツールです。Inconel 718 から単結晶 CMSX-4 まで Ni 基超合金を切り替え、最高温度・ひずみ振幅・IP/OP 位相条件を変えて、LCF・クリープ・酸化を統合した寿命と Larson-Miller パラメータをリアルタイム表示します。

**Category:** 材料疲労・タービン

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thermo-mechanical-fatigue-twin.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thermo-mechanical-fatigue-twin.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thermo-mechanical-fatigue-twin.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thermo-mechanical-fatigue-twin
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
