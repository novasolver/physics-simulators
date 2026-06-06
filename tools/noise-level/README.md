# 騒音レベル計算ツール

複数音源の騒音レベルを、SPL合成・距離減衰・大気吸収・A特性補正まで一括計算。点音源/線音源モデルに対応し、距離vs騒音レベルのグラフと各音源の寄与を棒グラフでリアルタイム可視化。騒音予測・評価を効率化するCAEツールの機能を解説します。

**Category:** 音響・騒音解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/noise-level.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/noise-level.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/noise-level.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/noise-level
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
