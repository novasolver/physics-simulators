# 大気再突入 シミュレーター — Sutton-Graves よどみ点加熱

Sutton-Graves 簡略式 q̇_s = K √(ρ/R_n) V³ で再突入カプセル先端のよどみ点加熱率を実時間で計算。局所大気密度・単位質量運動エネルギー・マッハ数を連動表示し、衝撃波と後流の幾何を可視化します。

**Category:** 宇宙工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/atmospheric-reentry.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/atmospheric-reentry.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/atmospheric-reentry.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/atmospheric-reentry
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
