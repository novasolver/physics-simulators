# 単振り子シミュレーター

振り子の長さ・初期角度・減衰係数・重力加速度を動かして、RK4数値積分でリアルタイム計算。振り子アニメーション・角変位波形・位相空間（θ-ω平面）の3タブで非線形振動を直感的に理解できます。

**Category:** 高校物理 / 振動解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/simple-pendulum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/simple-pendulum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/simple-pendulum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/simple-pendulum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
