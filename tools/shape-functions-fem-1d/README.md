# 1D有限要素 形状関数シミュレーター

有限要素法の心臓部「形状関数」を直感的に学べるツールです。線形2節点要素と二次3節点要素を切り替え、自然座標 ξ と節点の値を動かすと、要素内の補間場 u(ξ)・単位分割 ΣN=1・場の勾配 du/dξ がリアルタイムで分かります。

**Category:** 有限要素法

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/shape-functions-fem-1d.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/shape-functions-fem-1d.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/shape-functions-fem-1d.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/shape-functions-fem-1d
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
