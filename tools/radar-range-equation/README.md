# レーダー方程式シミュレーター

モノスタティックレーダーがターゲットを探知できる最大距離を、レーダー方程式から計算するツールです。送信電力・アンテナ利得・周波数・ターゲットRCSを変えると、最大探知距離・受信エコー電力・レーダーバンドがリアルタイムで分かり、電波が距離の4乗で弱まる仕組みを体感できます。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/radar-range-equation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/radar-range-equation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/radar-range-equation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/radar-range-equation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
