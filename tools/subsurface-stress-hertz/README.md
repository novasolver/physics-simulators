# Hertz接触サブサーフェス応力シミュレーター — σz・σr・τmax の深さ分布

Hertz 球接触の中心軸上における σ_z・σ_r・τ_max の深さ方向分布をリアルタイム可視化。最大せん断応力は z≈0.48a に発生し、転がり接触疲労（ピッチング）の起点になります。

**Category:** 接触力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/subsurface-stress-hertz.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/subsurface-stress-hertz.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/subsurface-stress-hertz.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/subsurface-stress-hertz
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
