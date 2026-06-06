# 推力係数 シミュレーター — ロケットノズルの C_F と比推力

推力係数シミュレーターは、燃焼室圧 P_c・出口圧 P_e・比熱比 γ・燃焼室温度 T_c から、ロケットノズルの推力係数 C_F・特性速度 c*・比推力 Isp・排気速度 V_e をリアルタイム計算し、ノズル断面と性能曲線を可視化する推進工学の教育用ツールです。

**Category:** 推進工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thrust-coefficient.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thrust-coefficient.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thrust-coefficient.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thrust-coefficient
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
