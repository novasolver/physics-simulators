# モンテカルロ放射伝達 MCRT シミュレーター — 光子追跡

吸収・散乱媒質の中を進む光子をモンテカルロ法でランダムウォーク追跡し、拡散反射率・透過率・浸透深さをリアルタイムに評価するツールです。生体組織光学・光線力学療法・薄膜光学・星間ダストなど、散乱優位の放射輸送に共通する MCML 流の枠組みをブラウザ上で体感できます。

**Category:** 数値計算・放射伝達

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/monte-carlo-radiative-transfer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/monte-carlo-radiative-transfer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/monte-carlo-radiative-transfer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/monte-carlo-radiative-transfer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
