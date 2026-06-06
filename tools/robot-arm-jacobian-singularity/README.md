# ロボットアーム ヤコビアン特異点シミュレーター

2 リンク平面ロボットアームを対象に、関節角度・リンク長を変えるとヤコビアン行列 det(J)、操作可能度 w (Yoshikawa)、特異値 σ_max/σ_min、条件数 κ がリアルタイムで計算されます。特異点に近づくと操作可能度楕円体が潰れる様子を観察し、DLS 逆運動学や経路計画の事前評価に活用してください。

**Category:** ロボット工学・制御

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/robot-arm-jacobian-singularity.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/robot-arm-jacobian-singularity.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/robot-arm-jacobian-singularity.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/robot-arm-jacobian-singularity
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
