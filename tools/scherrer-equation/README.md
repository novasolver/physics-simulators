# シェラーの式 シミュレーター — X 線回折からの結晶子サイズ推定

シェラーの式 D = Kλ/(β cosθ) により、X 線波長 λ・ブラッグ角 θ・実測 FWHM β_total・装置 FWHM β_inst から、結晶子サイズ D・補正後 FWHM β_corr・補正なし D・適用範囲（D ≤ 100 nm）を実時間に計算します。Gaussian 仮定の装置幅補正と、ピーク形状・D-β 双曲線を可視化します。

**Category:** 結晶解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/scherrer-equation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/scherrer-equation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/scherrer-equation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/scherrer-equation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
