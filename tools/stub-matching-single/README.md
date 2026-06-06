# シングルスタブ整合シミュレーター

不整合な負荷を伝送線路に並列スタブ1本で整合させる、マイクロ波回路の定番設計ツールです。負荷インピーダンスと特性インピーダンスを変えると、スタブの取付位置 d と長さ ℓ、整合前後のVSWRがリアルタイムで分かります。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/stub-matching-single.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/stub-matching-single.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/stub-matching-single.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/stub-matching-single
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
