# ベジェ曲線シミュレーター

わずか数個の制御点でなめらかな曲線を「形づくる」ベジェ曲線を対話的に体験するツールです。制御点 P1・P2 を動かすと、曲線の形・パラメータ t での点・接線・曲率がリアルタイムで変化し、フォント・CAD・アニメーションを支える計算幾何の基礎を直感的に理解できます。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bezier-curve.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bezier-curve.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bezier-curve.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bezier-curve
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
