# 横座屈（梁の横ねじれ座屈）シミュレーター

強軸まわりに曲げを受けるI形鋼梁が、本来の曲げ強度に達する前に横へ振れてねじれる「横座屈」を解析するツールです。断面・横支点間距離・荷重条件を変えると、弾性横座屈モーメント・設計曲げ耐力・安全率がリアルタイムで分かり、横補剛の効果を確かめられます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lateral-torsional-buckling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lateral-torsional-buckling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lateral-torsional-buckling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lateral-torsional-buckling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
