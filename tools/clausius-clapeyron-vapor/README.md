# クラウジウス・クラペイロンの式（蒸気圧）シミュレーター

基準点 (T₁, P₁) と蒸発潜熱 ΔH_vap が分かれば、別の温度 T₂ における蒸気圧 P₂ をリアルタイムで予測できます。蒸気圧は温度の指数関数として増大し、沸点・蒸留・気象すべての基礎になる関係式を、フラスコ内アニメーションと P−T 曲線・ln P−1/T 直線で直感的に確認できます。

**Category:** 熱力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/clausius-clapeyron-vapor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/clausius-clapeyron-vapor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/clausius-clapeyron-vapor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/clausius-clapeyron-vapor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
