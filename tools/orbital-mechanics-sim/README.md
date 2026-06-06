# 軌道力学 拡張シミュレーター — vis-viva 速度・全エネルギー可視化

vis-viva 方程式と軌道全エネルギーを Chart.js で同時可視化する解析寄りの拡張版です。任意の離心率・長半径で v(r) のプロファイルとエネルギー保存則を確認できます。LEO/GEO プリセットを試したい場合や 3 軌道要素の基礎理解は『軌道力学 基礎シミュレーター』を併用してください。

**Category:** 宇宙力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/orbital-mechanics-sim.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/orbital-mechanics-sim.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/orbital-mechanics-sim.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/orbital-mechanics-sim
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
