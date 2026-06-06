# バナジウムレドックスフロー電池 VRFB シミュレーター

系統用大規模蓄電池の有力候補、バナジウムレドックスフロー電池 (VRFB) の設計ツールです。セル有効面積・スタック構成・電解液体積・バナジウム濃度・電流密度を変えると、出力電力・蓄電容量・放電時間がリアルタイムで分かります。電力と容量を独立にスケールできる VRFB の特徴を体感できます。

**Category:** エネルギー貯蔵

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/vanadium-redox-flow-battery.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/vanadium-redox-flow-battery.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/vanadium-redox-flow-battery.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/vanadium-redox-flow-battery
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
