# クーラン数 シミュレーター — 陽的時間積分の安定性

クーラン数 $\mathrm{CFL} = u\,\Delta t/\Delta x$ をインタラクティブに計算します。移流速度 $u$、時間ステップ $\Delta t$、空間刻み $\Delta x$、最大許容 $\mathrm{CFL}_\mathrm{max}$ を変えて、安定・境界・不安定の判定、最大許容 $\Delta t$、最大許容 $u$、信号伝播の模式図を同時に可視化します。

**Category:** CFD 基礎シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cfl-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cfl-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cfl-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cfl-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
