# 2D線形弾性シミュレーター — 平面応力と平面ひずみ

3次元の弾性問題を2次元に簡略化する「平面応力」と「平面ひずみ」を比較するツールです。面内応力 σx・σy・τxy を入力すると、フックの法則からひずみ成分・面外成分・von Mises応力がリアルタイムで求まり、薄板と厚物で結果がどう変わるかが分かります。

**Category:** 材料力学・FEM

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/linear-elasticity-2d.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/linear-elasticity-2d.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/linear-elasticity-2d.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/linear-elasticity-2d
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
