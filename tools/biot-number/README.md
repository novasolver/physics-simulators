# ビオ数 シミュレーター — 過渡熱伝導の集中容量モデル判定

対流熱伝達率 h・固体熱伝導率 k・特性長 L_c・熱拡散率 α から、ビオ数 Bi = hL_c/k、集中容量モデルの適用領域、時定数 τ = ρc_p L_c/h、t = τ における無次元残差 T/T_0 = exp(−1) をリアルタイムに計算します。固体断面の温度勾配と Bi-領域マップで、集中容量近似が使えるかどうかを直感的に判定できます。

**Category:** 熱伝達シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/biot-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/biot-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/biot-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/biot-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
