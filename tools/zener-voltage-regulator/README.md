# ツェナーダイオード定電圧回路シミュレーター

直列抵抗とツェナーダイオードだけで作る、最もシンプルな定電圧回路（シャントレギュレータ）を設計するツールです。入力電圧・ツェナー電圧・直列抵抗・負荷抵抗を変えると、出力電圧・各部の電流・消費電力がリアルタイムで分かり、安定した基準電圧を作れます。

**Category:** 電子回路

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/zener-voltage-regulator.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/zener-voltage-regulator.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/zener-voltage-regulator.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/zener-voltage-regulator
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
