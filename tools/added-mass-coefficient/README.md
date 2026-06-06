# 付加質量シミュレーター

流体の中で物体を加速させると、周囲の流体も一緒に動かすため、物体は実際より重く振る舞います。この「付加質量（仮想質量）」を、形状・寸法・流体密度・加速度から計算するツールです。球・円柱・平板・角柱の付加質量係数 Ca、有効質量、加速に必要な力がリアルタイムで分かります。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/added-mass-coefficient.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/added-mass-coefficient.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/added-mass-coefficient.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/added-mass-coefficient
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
