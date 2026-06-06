# ロボット関節トルク・ニュートン-オイラー動力学計算機

ロボット関節トルクをニュートン-オイラー法で自動計算できる無料オンラインシミュレーターです。2自由度ロボットアームの動力学を可視化し、関節トルク、慣性、遠心力、重力項を分解して表示。三次スプライン軌道に基づくトルク-時間グラフも生成でき、ロボット設計や制御の学習・研究に最適です。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/robot-dynamics.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/robot-dynamics.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/robot-dynamics.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/robot-dynamics
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
