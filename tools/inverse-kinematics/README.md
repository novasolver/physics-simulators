# ロボットアーム逆運動学計算機（2/3自由度）

ロボットアームの逆運動学を2自由度および3自由度で計算するツールです。目標位置(x,y)または(x,y,z)から、リンク長L₁・L₂・L₃を用いて関節角度θ₁・θ₂・θ₃を解析的/反復法で算出。エルボーアップ/ダウンの両解や特異点をリアルタイムに可視化し、到達可能条件も確認できます。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/inverse-kinematics.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/inverse-kinematics.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/inverse-kinematics.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/inverse-kinematics
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
