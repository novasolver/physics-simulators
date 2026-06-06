# 板金加工計算器 — 曲げ代・スプリングバック

板金加工計算器で曲げ代（Bend Allowance）・フラット展開長・スプリングバック角度を即時計算。材料、板厚、曲げ半径、曲げ角度を入力するだけで、Kファクター（中立軸位置）を考慮した正確な展開寸法と、スプリングバック ≈ θ×(1 − R/(R + 5t)) による角度補正値を取得できます。設計・加工の効率化に。

**Category:** 板金・プレス設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sheet-metal.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sheet-metal.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sheet-metal.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sheet-metal
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
