# 腎機能 eGFR・CKD 病期シミュレーター — CKD-EPI 2021

血清クレアチニンと年齢・性別から推算糸球体濾過量 eGFR を 4 つの式（CKD-EPI 2021 race-free、CKD-EPI 2009、MDRD、Cockcroft-Gault）で同時計算し、KDIGO ガイドラインの CKD 病期（G1〜G5）とアルブミン尿区分（A1〜A3）、透析判定と ESRD 到達予測年をリアルタイムに可視化します。

**Category:** 医療・腎臓内科

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/kidney-glomerular-filtration-egfr.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/kidney-glomerular-filtration-egfr.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/kidney-glomerular-filtration-egfr.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/kidney-glomerular-filtration-egfr
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
