# 水力直径シミュレーター — 非円形ダクト

矩形ダクト・円環流路・正方形ダクトの「水力直径」を計算するツールです。断面形状と寸法を変えると、流路断面積・濡れ縁長さ・水力直径 D_h=4A/P・レイノルズ数がリアルタイムで分かり、非円形ダクトを円管の摩擦・伝熱相関式で扱える等価直径を直感的に理解できます。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hydraulic-diameter.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hydraulic-diameter.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hydraulic-diameter.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hydraulic-diameter
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
