# トンネル火災 換気・臨界風速シミュレーター

道路トンネル火災で煙の逆流（backlayering）を防ぐ最低風速「臨界風速 V_c」を Heselden-Thomas / Kennedy 式で計算し、ジェットファン推力と本数から得られる実現気流速度と比較します。火災シナリオ（乗用車・バス・HGV・タンク車）や断面寸法を変えて、縦流換気の煙制御性能を即時に評価できます。

**Category:** 防災・トンネル火災

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tunnel-fire-cfd-ventilation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tunnel-fire-cfd-ventilation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tunnel-fire-cfd-ventilation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tunnel-fire-cfd-ventilation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
