# デジタルフィルター設計 — 周波数応答シミュレーター

バターワース（IIR）とウィンドウFIRの2方式でデジタルフィルターを設計。カットオフ周波数・次数・窓関数をスライダーで調整し、振幅（dB）・位相応答をリアルタイムで可視化。CAE振動データ処理の基礎学習に最適。

**Category:** 振動・波動

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/signal-filter.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/signal-filter.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/signal-filter.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/signal-filter
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
