# マーチャント切削力学 シミュレーター — 二次元直角切削の力解析

二次元直角切削におけるマーチャント方程式 φ = 45° + α/2 − β/2 を解き、せん断角・摩擦角・主分力 F_c・背分力 F_t を解析。すくい角 α・摩擦係数 μ・切込み t・せん断流動応力 τ_s を変えて、力の円とせん断面の応答を可視化できる切削加工シミュレーター。

**Category:** 加工力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/merchant-cutting.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/merchant-cutting.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/merchant-cutting.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/merchant-cutting
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
