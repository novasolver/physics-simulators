# 音響パワーレベル ISO 3744 シミュレーター

ISO 3744（半無響室・自由音場法）に基づき、機械から放射される音響パワーレベル L_W を求めるツールです。測定面、マイクロホン数、平均 SPL、暗騒音、環境補正 K₂ を変えるだけで、K₁ 補正・補正後 SPL・L_W・不確かさ・計測等級がリアルタイムに表示されます。

**Category:** 機械音響・騒音計測

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sound-power-iso-3744.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sound-power-iso-3744.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sound-power-iso-3744.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sound-power-iso-3744
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
