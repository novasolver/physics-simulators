# ドローン クアッドコプター騒音予測シミュレーター

マルチロータ式ドローン（クアッドコプター・eVTOL・物流配送機）の騒音を、ブレード通過周波数（BPF）と距離減衰モデルで予測するツールです。ロータの寸法・回転数・推力・観測距離を変えると、翼端マッハ数・1m基準SPL・観測点dBA・規制超過量がリアルタイムに分かり、低騒音設計の方向性を探れます。

**Category:** ドローン・空力騒音

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/drone-quadcopter-noise-1m.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/drone-quadcopter-noise-1m.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/drone-quadcopter-noise-1m.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/drone-quadcopter-noise-1m
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
