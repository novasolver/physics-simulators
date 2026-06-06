# Wahl 補正係数 シミュレーター — 螺旋ばねの最大せん断応力

Wahl 補正係数 K_W = (4C−1)/(4C−4) + 0.615/C を用いて、螺旋ばね（コイルばね）の最大せん断応力 τ_max を解析。荷重・平均コイル径 D・線径 d・有効巻数 n_a を変えると、ばね指数 C・K_W・ばね剛性 k が同時に比較できる機械要素シミュレーター。

**Category:** 機械要素シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wahl-correction.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wahl-correction.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wahl-correction.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wahl-correction
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
