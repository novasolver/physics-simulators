# 横転限界（静的安定係数）シミュレーター

車がカーブを曲がるとき、どの横加速度で横転し始めるのかを決める静的安定係数 SSF を計算するツールです。輪距・重心高さ・速度・旋回半径を変えると、旋回時の横加速度、横転限界速度、安全余裕がリアルタイムで分かり、背の高い車がなぜ横転しやすいのかを直感的に確かめられます。

**Category:** 自動車工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rollover-threshold.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rollover-threshold.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rollover-threshold.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rollover-threshold
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
