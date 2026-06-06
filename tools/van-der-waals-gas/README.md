# ファンデルワールス状態方程式 シミュレーター — 実在気体の圧縮率因子

ファンデルワールス状態方程式シミュレーターは、温度 T・圧力 P・分子間引力 a・排除体積 b から、実在気体のモル体積 V_m・圧縮率因子 Z・臨界温度 T_c・臨界圧力 P_c をリアルタイムに計算します。P-V_m 等温線で理想気体との差を比較し、Z=1 からのズレで実在気体の挙動を直感的に学べる教育用ツールです。

**Category:** 熱力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/van-der-waals-gas.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/van-der-waals-gas.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/van-der-waals-gas.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/van-der-waals-gas
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
