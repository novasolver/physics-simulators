# 大振幅振り子 シミュレーター — 周期の振幅依存性

振り子の長さ L、振幅 θ₀、重力加速度 g、質量 m から小角度近似周期 T₀=2π√(L/g) と完全楕円積分による厳密周期 T=4√(L/g)·K(sin(θ₀/2)) を実時間計算し、周期誤差と位置エネルギー m·g·L·(1−cosθ₀) を同時表示します。振り子アニメーションと θ₀–誤差曲線で「等時性が成り立つ範囲」と「大振幅で周期が伸びる物理」を直感的に学べます。

**Category:** 振動シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pendulum-large-angle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pendulum-large-angle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pendulum-large-angle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pendulum-large-angle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
