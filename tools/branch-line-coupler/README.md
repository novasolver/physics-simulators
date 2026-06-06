# ブランチライン カプラ シミュレーター

RF・マイクロ波回路で1つの信号を等振幅・90°位相差の2出力に分ける、3-dBブランチラインカプラ（直交ハイブリッド）を設計するツールです。系統インピーダンス・動作周波数・基板の比誘電率を変えると、直列・並列ブランチの特性インピーダンスとλ/4線路長がリアルタイムで分かります。

**Category:** 高周波・RF

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/branch-line-coupler.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/branch-line-coupler.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/branch-line-coupler.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/branch-line-coupler
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
