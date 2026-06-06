# カルマン渦 シミュレーター — Strouhal 数とロックイン

円柱に交互放出されるカルマン渦の周波数 fs = St·V/D をリアルタイム計算。流速・直径・Strouhal数・固有振動数から Reynolds 数、fs/fn 比、ロックイン判定を求め、後流渦列と V-fs 線図を可視化します。

**Category:** 流体振動シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/karman-vortex.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/karman-vortex.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/karman-vortex.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/karman-vortex
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
