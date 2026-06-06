# 箱桁のせん断遅れ シミュレーター

箱桁の広い上下フランジでは、曲げ応力がウェブ際に集中し中央へ向かって「遅れる」せん断遅れが起きます。フランジ幅・支間長・板厚を変えると、せん断遅れ係数と有効フランジ幅がリアルタイムで分かり、ウェブ際の真のピーク応力を見落とさずに設計できます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/shear-lag-box-girder.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/shear-lag-box-girder.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/shear-lag-box-girder.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/shear-lag-box-girder
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
