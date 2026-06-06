# 心電図 QRS 検出シミュレーター

心電図波形から R 波（QRS 群の頂点）を取り出す古典手法 Pan-Tompkins アルゴリズムを、ブラウザ上で可視化します。心拍数・サンプリング周波数・ノイズレベル・帯域・しきい値を変えると、検出感度・PPV・処理遅延がその場で更新され、ホルター心電計やウェアラブル機器の設計感覚がつかめます。

**Category:** 医工学・信号処理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ekg-qrs-detection.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ekg-qrs-detection.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ekg-qrs-detection.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ekg-qrs-detection
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
