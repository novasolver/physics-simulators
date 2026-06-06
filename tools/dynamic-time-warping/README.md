# 動的時間伸縮 DTW シミュレーター

速度や位相がずれた 2 つの時系列を、時間軸の伸縮を許した最適アラインメントで比較する Dynamic Time Warping（DTW）の動作を体験するツールです。系列長・Sakoe-Chiba 窓幅・距離計量・位相シフト・振幅倍率を変えると、DTW 距離・素朴な L2 距離・コスト行列セル数・メモリ削減率・スピードアップ比がリアルタイムで更新されます。

**Category:** 信号処理・時系列解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/dynamic-time-warping.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/dynamic-time-warping.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/dynamic-time-warping.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/dynamic-time-warping
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
