# Li 析出 (Lithium plating) 急速充電劣化シミュレーター

急速充電で負極表面に金属リチウムが析出する「リチウムプレーティング」を、C-rate・セル温度・SOC・負極化学から推定します。Butler–Volmer 過電圧で負極電位 vs Li/Li⁺ を計算し、低温・高 SOC・高 C-rate の危険域でサイクル寿命がどれだけ短くなるかをリアルタイムに可視化します。

**Category:** 電池工学・寿命管理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lithium-plating-anode-charge.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lithium-plating-anode-charge.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lithium-plating-anode-charge.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lithium-plating-anode-charge
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
