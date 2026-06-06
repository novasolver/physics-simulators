# バッテリー等価回路モデル・放電シミュレーター

NovaSolverのバッテリー等価回路モデル・放電シミュレーターは、Li-ion・LFP・鉛蓄電池の放電特性をリアルタイムに再現。OCV-SOC曲線や内部抵抗を考慮した高精度な端子電圧・SOCの可視化を実現するCAEツールです。電池の設計・評価を効率化します。

**Category:** 電気化学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/battery-model.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/battery-model.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/battery-model.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/battery-model
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
