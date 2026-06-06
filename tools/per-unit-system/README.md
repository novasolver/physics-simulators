# 単位法 シミュレーター — 電力系統の p.u. 値変換

三相電力系統の基準電圧 V_base と基準容量 S_base から Z_base・I_base を導出し、実値 V・Z を p.u. に正規化。単線図と棒グラフで基準値と p.u. 値の対応をリアルタイムに可視化します。

**Category:** 電力工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/per-unit-system.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/per-unit-system.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/per-unit-system.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/per-unit-system
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
