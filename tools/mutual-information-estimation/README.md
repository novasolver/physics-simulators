# 相互情報量 MI 推定シミュレーター

2変数 X, Y の「依存度」を線形・非線形を問わず測る相互情報量 I(X;Y) を、KSG（k近傍）・ビニング・KDE・解析解の4種類の推定器で比較できるツールです。サンプル数 N と相関係数 ρ を動かして、各推定器のバイアスと信頼区間がどう変わるかをリアルタイムに観察できます。

**Category:** 情報理論・統計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/mutual-information-estimation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/mutual-information-estimation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/mutual-information-estimation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/mutual-information-estimation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
