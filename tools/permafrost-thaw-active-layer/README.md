# 永久凍土 融解・活動層深さシミュレーター

永久凍土（パーマフロスト）の夏季融解で生じる活動層の深さを、ステファン方程式で予測するツールです。年平均気温・融解度日・土壌種・氷含有量・植生・積雪・温暖化シナリオを変えると、現在と将来の活動層深さ、地温、永久凍土から放出される炭素量（CO₂eq）までリアルタイムで見えます。

**Category:** 凍土工学・気候変動

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/permafrost-thaw-active-layer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/permafrost-thaw-active-layer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/permafrost-thaw-active-layer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/permafrost-thaw-active-layer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
