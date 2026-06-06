# 室内騒音 NC曲線評価シミュレーター

オクターブバンド（63〜4000Hz）の音圧レベル SPL を入力すると、Beranek の NC（Noise Criterion）曲線と比較して NC等級・支配周波数・A特性騒音レベルを自動算出。寝室・オフィス・会議室など室内の騒音設計に使える無料ツールです。

**Category:** 建築音響

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/noise-criterion-nc-curve.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/noise-criterion-nc-curve.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/noise-criterion-nc-curve.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/noise-criterion-nc-curve
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
