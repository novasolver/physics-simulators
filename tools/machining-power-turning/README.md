# 旋削加工の切削動力シミュレーター

旋盤で材料を削る旋削加工に「どれだけの動力が要るか」を見積もるツールです。切削速度・送り・切込み・被削材の比切削抵抗を変えると、主切削力・切削動力・必要モータ動力・材料除去率がリアルタイムで分かり、機械の選定や切削条件の検討に使えます。

**Category:** 加工・製造

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/machining-power-turning.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/machining-power-turning.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/machining-power-turning.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/machining-power-turning
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
