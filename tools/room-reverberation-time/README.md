# 室内の残響時間（サビン式）シミュレーター

音源を止めたあとも室内に音が残る時間「残響時間 T60」を、サビンの式とアイリングの式で計算するツールです。室の容積・表面積・平均吸音率・吸音処理を変えると、会話に適した部屋や音楽ホールに必要な残響がリアルタイムで分かります。

**Category:** 音響工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/room-reverberation-time.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/room-reverberation-time.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/room-reverberation-time.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/room-reverberation-time
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
