# サイリスタ位相制御シミュレーター

サイリスタ（SCR）の点弧角を遅らせて、抵抗負荷へ届く電力を調整する位相制御の動きを学ぶツールです。電源電圧・点弧角・負荷抵抗・整流方式を変えると、出力平均電圧・実効電圧・電力・力率がリアルタイムで分かり、調光器やヒータ制御の原理を直感的に理解できます。

**Category:** 電力工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thyristor-firing-angle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thyristor-firing-angle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thyristor-firing-angle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thyristor-firing-angle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
