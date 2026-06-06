# アンテナ利得・指向性シミュレーター

アンテナ利得と指向性をシミュレーションできるツールです。等方性アンテナ、半波ダイポール、八木宇田アンテナ、パッチアンテナから選択し、周波数や距離を変えてフリスの伝達方程式による伝搬損失をリアルタイム計算。放射パターンの可視化で指向性が一目で分かります。

**Category:** 電磁気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/antenna-gain.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/antenna-gain.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/antenna-gain.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/antenna-gain
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
