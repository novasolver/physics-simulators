# Smith 予測器シミュレーター — 死時間補償と PI の比較

死時間を持つ一次遅れプロセスに対する、標準 PI 制御と Smith 予測器のステップ応答をリアルタイムに比較。死時間補償によりオーバーシュートが小さくなり整定が早まる様子を直感的に学べます。

**Category:** プロセス制御シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/smith-predictor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/smith-predictor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/smith-predictor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/smith-predictor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
