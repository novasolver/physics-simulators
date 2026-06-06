# 組合せ応力（軸力＋曲げ）シミュレーター

NovaSolverの組合せ応力シミュレーターは、軸力と曲げモーメントを同時に受ける矩形・円形断面の応力分析を無料で行えるオンライン計算機です。法線応力分布をカラーで直感的に可視化し、中立軸の位置、最大応力、安全率をリアルタイムで計算します。材料力学の学習や簡易構造検討に最適です。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/column-stress.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/column-stress.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/column-stress.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/column-stress
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
