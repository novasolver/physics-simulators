# 画像畳み込みカーネル シミュレーター

3×3カーネルによる画像畳み込みをリアルタイムで可視化する無料シミュレーター。シャープ化・ぼかし・エッジ抽出・ソーベル・エンボスなどのカーネルを切り替え、入力画像との畳み込み結果と走査線プロファイルを観察し、畳み込みニューラルネットワーク（CNN）の仕組みを直感的に学べます。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/image-convolution-kernel.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/image-convolution-kernel.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/image-convolution-kernel.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/image-convolution-kernel
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
