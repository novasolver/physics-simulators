# Runge-Kutta法 安定性シミュレーター

Runge-Kutta法 安定性シミュレーター: 常微分方程式を解く数値積分法（オイラー法・RK2・RK4）の「絶対安定性」を可視化するツールです。刻み幅 h と固有値 λ を変えると、増幅率 R(z) と複素平面の安定領域、そして数値解が発散するかどうかがリアルタイムで分かります。'=λy の増幅率 R(z) と複素平面の安定領域を計算し、刻み幅 h をどこまで大きくできるか、剛性方程式で数値解が発散しない条件を確認できます。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/runge-kutta-stability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/runge-kutta-stability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/runge-kutta-stability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/runge-kutta-stability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
