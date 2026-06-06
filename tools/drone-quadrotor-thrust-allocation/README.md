# クアッドロータードローン 推力配分シミュレーター

クアッドロータードローンは 4 つのモーター推力だけで合計推力と 3 軸モーメント（ロール・ピッチ・ヨー）の 4 自由度を作り出します。本ツールは X/+/H フレームごとのアロケーション行列をリアルタイムで解き、4 モーターそれぞれの必要推力と「あとどれだけ踏めるか」を可視化します。

**Category:** ドローン制御・航空機

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/drone-quadrotor-thrust-allocation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/drone-quadrotor-thrust-allocation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/drone-quadrotor-thrust-allocation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/drone-quadrotor-thrust-allocation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
