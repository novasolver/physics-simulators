# コンクリートのクリープ・収縮シミュレーター

Eurocode 2 / fib Model Code 2010 の簡易式で、コンクリートのクリープ係数 φ(t,t₀)、弾性・クリープ・収縮の各ひずみと等価長期弾性係数をリアルタイム計算します。圧縮強度・載荷時齢・相対湿度・名目厚さ・セメント種別を変えて、プレストレストコンクリート、橋梁、超高層ビルの軸縮みなど長期変形の当たりを取れます。

**Category:** 土木・構造材料

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/concrete-creep-shrinkage.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/concrete-creep-shrinkage.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/concrete-creep-shrinkage.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/concrete-creep-shrinkage
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
