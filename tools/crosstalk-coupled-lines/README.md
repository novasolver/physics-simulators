# 線路間クロストーク シミュレーター

プリント基板で並走する2本の配線のあいだに生じる「クロストーク」を計算するツールです。配線間隔・結合長・信号の立ち上がり時間を変えると、隣の配線に乗る近端クロストーク（NEXT）と遠端クロストーク（FEXT）がリアルタイムで分かり、ノイズに強い高速配線を設計できます。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/crosstalk-coupled-lines.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/crosstalk-coupled-lines.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/crosstalk-coupled-lines.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/crosstalk-coupled-lines
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
