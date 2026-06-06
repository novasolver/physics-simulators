# 変圧器の電圧変動率シミュレーター

配電用変圧器（トランス）の電圧変動率を求めるツールです。定格容量・百分率抵抗・百分率リアクタンス・負荷率・力率を変えると、無負荷電圧・電圧降下・銅損がリアルタイムで分かり、進み力率では二次電圧が逆に上昇する現象まで確認できます。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/transformer-voltage-regulation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/transformer-voltage-regulation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/transformer-voltage-regulation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/transformer-voltage-regulation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
