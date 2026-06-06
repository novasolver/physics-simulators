# 層化サンプリング シミュレーター

モンテカルロ積分の精度をタダで底上げする「層化サンプリング」を体験するツールです。区間 [0,1] を層に分割して各層から均等にサンプルを取ると、乱数の「かたまり」が消えて推定の標準誤差が下がります。層の数・総サンプル数・被積分関数を変えながら、通常モンテカルロとの差をリアルタイムに確かめられます。

**Category:** 統計・モンテカルロ

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/stratified-sampling-mc.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/stratified-sampling-mc.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/stratified-sampling-mc.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/stratified-sampling-mc
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
