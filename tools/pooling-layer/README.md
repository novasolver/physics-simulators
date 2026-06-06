# プーリング層シミュレーター — CNN

CNN（畳み込みニューラルネットワーク）のプーリング層を体験するツールです。最大プーリングと平均プーリングを切り替え、プールサイズ・ストライド・入力特徴マップを変えると、出力サイズや演算回数、走査アニメーションがリアルタイムで変化し、特徴マップを縮小するダウンサンプリングの仕組みを直感的に理解できます。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pooling-layer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pooling-layer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pooling-layer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pooling-layer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
