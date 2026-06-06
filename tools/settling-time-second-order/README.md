# 二次系のステップ応答（整定時間）シミュレーター

標準形の二次系にステップ入力を加えたときの時間応答を可視化するツールです。固有角振動数 ωn と減衰比 ζ を変えると、行き過ぎ量・ピーク時間・立ち上がり時間・整定時間がリアルタイムで分かり、制御系の時間応答仕様を直感的に理解できます。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/settling-time-second-order.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/settling-time-second-order.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/settling-time-second-order.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/settling-time-second-order
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
