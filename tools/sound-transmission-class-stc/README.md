# 遮音等級 STC シミュレーター

壁や間仕切りの遮音性能を米国規格の STC（Sound Transmission Class）で評価するツールです。面密度・単層／二重壁の切替・空気層厚さ・コインシデンス周波数を変えると、125〜4000 Hz の透過損失カーブと STC 等級がリアルタイムで更新され、住宅・スタジオ・オフィスの間仕切り設計に使えます。

**Category:** 建築音響

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sound-transmission-class-stc.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sound-transmission-class-stc.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sound-transmission-class-stc.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sound-transmission-class-stc
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
