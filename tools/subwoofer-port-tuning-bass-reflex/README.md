# サブウーファー バスレフ ポートチューニング — Helmholtz Fb

箱容積・ポート径・ポート長から Helmholtz 共鳴のチューニング周波数 Fb をリアルタイム計算し、QB3 / SBB4 / BB4 / EBS の各アラインメントとの整合度、-3dB ロールオフ、ポート気流速度（チャフリング判定）まで一括評価します。サブウーファーや小型 2way の低域設計に。

**Category:** オーディオ・スピーカ設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/subwoofer-port-tuning-bass-reflex.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/subwoofer-port-tuning-bass-reflex.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/subwoofer-port-tuning-bass-reflex.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/subwoofer-port-tuning-bass-reflex
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
