# PLL（位相同期回路）シミュレーター

きれいな基準周波数を分周比N倍して高精度な周波数を合成する位相同期回路（PLL）を設計するツールです。基準周波数・分周比・ループ帯域幅・減衰比を変えると、出力周波数・ロック時間・オーバーシュート・位相余裕がリアルタイムで分かり、速く安定にロックするシンセサイザを探せます。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/phase-locked-loop.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/phase-locked-loop.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/phase-locked-loop.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/phase-locked-loop
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
