# オイラー法・RK4 比較シミュレーター

常微分方程式をオイラー法・改良オイラー法（ホイン法）・RK4で数値積分し、厳密解との誤差をリアルタイム比較。刻み幅hと精度のO(h)・O(h²)・O(h⁴)依存性を対数グラフで可視化。CAE数値解析の基礎学習に最適。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/euler-method.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/euler-method.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/euler-method.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/euler-method
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
