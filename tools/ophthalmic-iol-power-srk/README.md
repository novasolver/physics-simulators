# 眼内レンズ IOL 度数計算シミュレーター

白内障手術で使う眼内レンズ (IOL) の度数を、SRK/T や Barrett Universal II など主要式でリアルタイム計算するツールです。眼軸長・角膜屈折・前房深度・目標屈折を変えると推奨度数と式別の差が一目で分かり、術前計画の感度検討に使えます。

**Category:** 眼科・医療デバイス

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ophthalmic-iol-power-srk.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ophthalmic-iol-power-srk.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ophthalmic-iol-power-srk.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ophthalmic-iol-power-srk
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
