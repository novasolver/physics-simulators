# PN接合ダイオード I-V特性シミュレーター

Shockley方程式 $I = I_0(e^{V/nV_T}-1)$ を使ってダイオードの電流-電圧特性を計算。材料・温度・理想係数をリアルタイムで変えて半導体の動作原理を体験しよう。

**Category:** 半導体シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/semiconductor-pn.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/semiconductor-pn.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/semiconductor-pn.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/semiconductor-pn
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
