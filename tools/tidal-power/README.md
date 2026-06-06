# 潮力発電・海流エネルギー計算機

潮流・潮汐エネルギーの発電量をリアルタイムで計算するCAE技術解説。潮流タービンと潮汐バラージの理論式（ベッツ限界含む）に基づき、年間発電量(AEP)、均等化発電原価(LCOE)、CO2オフセット量を自動算出。設計パラメータ変更による発電効率と経済性の評価を即座に行えます。

**Category:** 流体解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tidal-power.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tidal-power.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tidal-power.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tidal-power
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
