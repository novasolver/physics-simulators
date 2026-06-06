# 順運動学 シミュレーター — 2リンク平面マニピュレータ

リンク長 L₁, L₂ と関節角度 θ₁, θ₂ から末端位置 (x, y) を計算し、アーム姿勢と作業空間・特異点を可視化します。ヤコビアン行列式 det J = L₁L₂sinθ₂ もリアルタイム表示。

**Category:** ロボット工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/forward-kinematics.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/forward-kinematics.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/forward-kinematics.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/forward-kinematics
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
