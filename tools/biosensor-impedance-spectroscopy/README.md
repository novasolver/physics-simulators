# 電気化学インピーダンス分光 EIS バイオセンサーシミュレーター

標的分子（グルコース・ドーパミン・コルチゾール・DNA・タンパク質）の電極吸着を Randles 等価回路で計算し、Nyquist プロットの半円・Warburg テールをリアルタイム描画します。R_s・R_ct・C_dl・σ を調整して、ラベルフリー検出の検出限界（LoD）と Q 値を即座に確認できます。

**Category:** 医工学・電気化学センサー

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/biosensor-impedance-spectroscopy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/biosensor-impedance-spectroscopy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/biosensor-impedance-spectroscopy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/biosensor-impedance-spectroscopy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
