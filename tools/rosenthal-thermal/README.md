# ローゼンタール解 シミュレーター — 溶接の準定常熱伝導

移動熱源（アーク）の周りに広がる準定常温度場を、ローゼンタールの厚板解で計算します。電圧・電流・速度・アーク効率を変えると、入熱・線入熱・冷却時間t8/5・HAZ幅がリアルタイムに更新されます。

**Category:** 溶接工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rosenthal-thermal.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rosenthal-thermal.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rosenthal-thermal.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rosenthal-thermal
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
