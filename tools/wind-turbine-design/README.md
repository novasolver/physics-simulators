# 風力タービン設計ツール

ロータ直径・定格風速・Cp係数を入力して風力タービンの出力曲線を解析し、ワイブル風速分布から年間発電量・設備利用率を自動算出。ベッツ限界 Cp_max ≈ 0.593 を踏まえた設計初期検討に使える風力工学シミュレーターです。

**Category:** 風力エネルギー

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wind-turbine-design.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wind-turbine-design.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wind-turbine-design.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wind-turbine-design
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
