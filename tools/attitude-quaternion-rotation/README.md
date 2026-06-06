# 宇宙機姿勢クォータニオンシミュレーター

宇宙機・航空機・ロボットの3次元姿勢を表す「クォータニオン q=(w,x,y,z)」を、ロール／ピッチ／ヨーの Euler角と任意軸まわりの回転から合成し、リアルタイムに4成分・ノルム・等価 Euler角を計算します。gimbal lock を回避し、姿勢決定制御系 (ADCS) で標準的に使われる Hamilton 規約の四元数を直感的に学べます。

**Category:** 宇宙工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/attitude-quaternion-rotation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/attitude-quaternion-rotation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/attitude-quaternion-rotation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/attitude-quaternion-rotation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
