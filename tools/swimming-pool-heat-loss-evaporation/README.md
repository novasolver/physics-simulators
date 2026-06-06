# プール 熱損失 蒸発・対流・放射シミュレーター

屋内・屋外プールの3大熱損失（蒸発・対流・放射）をASHRAE / Carrierモデルで実時間計算します。水温・室温・湿度・風速・プール用途・カバー方式を変えると、蒸発量・全熱負荷・日間水損失・年間コストがどう変化するかを直感的に確かめられます。

**Category:** プール・熱負荷

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/swimming-pool-heat-loss-evaporation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/swimming-pool-heat-loss-evaporation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/swimming-pool-heat-loss-evaporation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/swimming-pool-heat-loss-evaporation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
