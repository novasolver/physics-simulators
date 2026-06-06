# 構造物の動的応答シミュレーター

1 自由度系（SDOF）に各種加振を与え、RK4 数値積分で応答をリアルタイム計算。変位・速度・加速度の時刻歴と周波数応答関数（FRF）をリアルタイム可視化します。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/structural-dynamics.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/structural-dynamics.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/structural-dynamics.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/structural-dynamics
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
