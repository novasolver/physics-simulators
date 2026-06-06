# Richardson補外と観測収束次数シミュレーター

3つの刻み幅で得た数値解から、観測収束次数 p と Richardson補外による真値推定 u_ext をリアルタイムで計算します。CFD・FEMのメッシュ収束（V&V）、ODE解法の精度評価、中点則・台形則・RK法の次数チェックに使える数値解析ツールです。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/richardson-extrapolation-order.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/richardson-extrapolation-order.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/richardson-extrapolation-order.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/richardson-extrapolation-order
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
