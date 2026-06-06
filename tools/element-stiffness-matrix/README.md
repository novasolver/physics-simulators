# 要素剛性マトリクス シミュレーター — 1D棒要素

有限要素法（FEM）の一番の基礎、1D棒（トラス）要素の剛性マトリクス [k]=(EA/L)[[1,-1],[-1,1]] を体感するツールです。ヤング率・断面積・要素長さ・軸力を変えると、要素剛性・全体剛性・節点変位・軸応力がリアルタイムで分かり、{F}=[k]{u} がどう解かれるかを直感的に学べます。

**Category:** 有限要素法

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/element-stiffness-matrix.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/element-stiffness-matrix.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/element-stiffness-matrix.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/element-stiffness-matrix
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
