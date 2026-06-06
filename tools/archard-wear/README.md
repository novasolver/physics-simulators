# アーチャードの摩耗則 シミュレーター — トライボロジー

アーチャードの摩耗則 dV/dx = K·F_N/H に基づき、接着摩耗の体積摩耗率 dV/dt = K·F_N·v/H、質量摩耗率（鋼 ρ=7800 kg/m³）、見かけ接触面積 10 cm² に対する厚さ減少率、V_max = 1 mm³ 摩耗までの寿命を、摩耗係数 K、法線荷重 F_N、すべり速度 v、硬さ H から実時間に計算します。接触面の模式図と K−摩耗率の対数−対数線図で、摩耗のスケーリングを直感的に把握できます。

**Category:** トライボロジーシミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/archard-wear.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/archard-wear.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/archard-wear.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/archard-wear
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
