# PIDコントローラーシミュレーター — ステップ応答チューニング

PIDコントローラーのステップ応答をリアルタイムでシミュレーション。比例・積分・微分ゲイン（Kp, Ti, Td）を調整し、オーバーシュートや整定時間、IAEを即座に確認できます。Ziegler-Nichols法によるチューニングも可能。制御工学の学習やPIDパラメータ調整の実践に最適なシミュレーターツールです。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pid-controller.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pid-controller.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pid-controller.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pid-controller
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
