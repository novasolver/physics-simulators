# ルンゲ・クッタ法 シミュレーター — RK4 vs Euler の精度比較

減衰率 k・ステップ幅 h・計算終端 x_end・初期値 y₀ から、古典的 4 次ルンゲ・クッタ法（RK4）と Euler 法で常微分方程式 dy/dx = −k·y を数値積分し、厳密解 y = y₀·exp(−k·x) と並べて比較します。終端値・Euler 相対誤差を実時間表示し、累積誤差を log10 スケールで可視化することで「収束次数」を直感的に学べます。

**Category:** 数値解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/runge-kutta.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/runge-kutta.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/runge-kutta.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/runge-kutta
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
