# フィードフォワード補償シミュレーター — 外乱抑圧

フィードフォワード補償シミュレーターはPID単独と外乱経路ゲインを使ったFF+PID併用を比較し、ステップ外乱応答のピーク偏差と整定時間をリアルタイム計算します。なぜモデル既知の外乱を事前に打ち消すと制御性能が大幅向上するかを直感的に学べます。

**Category:** 制御工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/feedforward-compensation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/feedforward-compensation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/feedforward-compensation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/feedforward-compensation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
