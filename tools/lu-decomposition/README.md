# LU 分解シミュレーター — 直接解法と部分ピボット

3×3行列をL·Uに分解し、前進代入Ly=bと後退代入Ux=yでAx=bを解く過程を可視化。対角要素と右辺を変えて、行列式・解・残差・条件数の変化を学べます。

**Category:** 数値線形代数シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lu-decomposition.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lu-decomposition.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lu-decomposition.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lu-decomposition
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
