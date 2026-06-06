# EV充電時間シミュレーター

電気自動車（EV）の充電にかかる時間を計算するツールです。バッテリー容量・開始/目標SOC・充電器の出力・充電効率を変えると、必要なエネルギー、グリッドから引く電力量、充電時間、追加走行距離、充電コストがリアルタイムで分かります。80%以降のテーパリング（充電速度の低下）まで考慮した実用的なモデルです。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ev-charging-time.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ev-charging-time.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ev-charging-time.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ev-charging-time
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
