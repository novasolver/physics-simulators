# マッチドフィルタ シミュレーター — 雑音中のパルス検出

白色雑音に埋もれた既知パルスを畳み込みで検出するマッチドフィルタを可視化。振幅・パルス長・雑音強度を変えて、出力 SNR がパルス長 L 倍に改善する仕組みを直感的に学べます。

**Category:** 信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/matched-filter.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/matched-filter.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/matched-filter.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/matched-filter
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
