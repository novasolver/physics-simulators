# 半値幅法による減衰比測定シミュレーター

1自由度振動系の周波数応答関数（FRF）から、減衰比 ζ を「共振ピークの幅」で測定する半値幅法（3dB法）を体験するツールです。固有振動数・減衰比・質量・加振力を変えると、共振ピークの形、半値点 f₁・f₂、品質係数 Q、半値幅 Δf がリアルタイムで分かります。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/half-power-bandwidth.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/half-power-bandwidth.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/half-power-bandwidth.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/half-power-bandwidth
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
