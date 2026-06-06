# k-meansクラスタリング シミュレーター

教師なし学習の代表アルゴリズム k-means法（Lloyd法）を、その場で動かして観察できるツールです。クラスタ数 k や初期化方法を変えると、データ点の割り当てと重心の移動、クラスタ内二乗和 WCSS の収束、そしてエルボー法による k の選定がアニメーションとグラフでわかります。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/k-means-clustering.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/k-means-clustering.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/k-means-clustering.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/k-means-clustering
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
