# CubeSat 電力予算シミュレーター — 太陽電池と蓄電池の設計

CubeSat（1U〜12U）の電力予算（パワーバジェット）をブラウザで設計するツールです。機体面パネル・展開パネル・軌道高度・食率・ペイロード電力を変えると、軌道周期・発電量・電力余裕・必要蓄電池容量がリアルタイムで分かり、設計初期のサイジング検討に使えます。

**Category:** 宇宙工学・小型衛星

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cubesat-power-budget.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cubesat-power-budget.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cubesat-power-budget.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cubesat-power-budget
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
