# convection-diffusion

NovaSolverの無料オンラインシミュレーターで、1次元定常対流拡散方程式を解き、中心差分・風上差分・QUICK法の挙動を比較。ペクレ数上昇に伴う中心差分の振動や、風上差分の数値拡散、QUICKの高精度解をリアルタイムに可視化し、CFD数値スキームの核心を直感的に学べます。

**Category:** 流体解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/convection-diffusion.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/convection-diffusion.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/convection-diffusion.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/convection-diffusion
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
