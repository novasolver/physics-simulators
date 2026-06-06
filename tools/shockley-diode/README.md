# ショックレーダイオード シミュレーター — pn 接合 I-V 特性

ショックレーのダイオード式 I = I_S(exp(V/nV_T) - 1) を実時間で計算します。飽和電流・順方向電圧・理想率・温度から、熱電圧 V_T = kT/q、動的抵抗 r_d = nV_T/I、消費電力 P = V·I を求め、pn 接合の半対数 I-V 曲線と複数温度での I-V 比較を可視化して半導体物理を直感的に理解できます。

**Category:** 半導体シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/shockley-diode.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/shockley-diode.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/shockley-diode.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/shockley-diode
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
