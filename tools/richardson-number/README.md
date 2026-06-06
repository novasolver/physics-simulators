# リチャードソン数 シミュレーター — 成層流の安定性

成層流における浮力 vs 慣性比 Ri = gβΔT·L/V² をリアルタイム計算。ブラント・ベイサラ振動数 N、混合限界速度 V_crit、Ri=0.25/1 を境界とする三領域 (不安定/中性/安定) を可視化します。

**Category:** 環境流体シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/richardson-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/richardson-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/richardson-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/richardson-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
