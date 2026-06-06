# HVAC ダクト圧力損失 ASHRAE シミュレーター

HVAC 風管（ダクト）の摩擦損失・局所損失・全圧力損失・ファン電力を ASHRAE 標準（Darcy-Weisbach + Colebrook-White / Swamee-Jain）で計算。円形・矩形・フラットオーバルの形状、亜鉛メッキ鋼板・アルミ・フレキの材質、温度、継手数を変えてダクト設計の妥当性を判定できる無料ツールです。

**Category:** HVAC・建築設備

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hvac-duct-pressure-drop-standard.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hvac-duct-pressure-drop-standard.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hvac-duct-pressure-drop-standard.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hvac-duct-pressure-drop-standard
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
