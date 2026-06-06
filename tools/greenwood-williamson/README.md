# Greenwood-Williamson 粗面接触シミュレーター

ガウス分布で表されたアスペリティ高さに基づく古典的なGW粗面接触モデル。標準偏差σ・頂点曲率半径β・密度η・基準面間距離dを動かすと、実接触面積率・名目接触圧・実接触個数がリアルタイムに変化。摩耗や接触剛性の感度を肌で理解できます。

**Category:** トライボロジーシミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/greenwood-williamson.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/greenwood-williamson.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/greenwood-williamson.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/greenwood-williamson
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
