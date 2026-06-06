# 水中音響ソナー方程式 探知距離シミュレーター

水中音響ソナー方程式（Urick 1983）からアクティブ／パッシブソナーの最大探知距離をリアルタイム計算するツールです。音源レベル・標的反射・環境ノイズ・指向性・検出閾値・周波数・水深・水温を変えると、音速・吸収係数・許容伝搬損失・探知距離・波長が同時に求まり、潜水艦探知や海洋調査の感度設計が直感的に把握できます。

**Category:** 水中音響・ソナー

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/underwater-acoustic-sonar-range.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/underwater-acoustic-sonar-range.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/underwater-acoustic-sonar-range.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/underwater-acoustic-sonar-range
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
