# カスケード雑音指数（フリス）シミュレーター

3段で構成したRF受信チェーンの総合雑音指数を、フリスの公式でリアルタイムに計算するツールです。各段の利得と雑音指数を変えると、総合NF・等価雑音温度・各段の雑音寄与が分かり、なぜ低雑音増幅器（LNA）を最前段に置くのかが直感的に理解できます。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/noise-figure-cascade.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/noise-figure-cascade.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/noise-figure-cascade.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/noise-figure-cascade
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
