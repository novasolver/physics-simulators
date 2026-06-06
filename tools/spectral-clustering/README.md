# スペクトラルクラスタリング シミュレーター

スペクトラルクラスタリングのインタラクティブ模擬：RBF・k-NN・コサイン親和度行列、正規化グラフラプラシアン L=D^-1/2(D-W)D^-1/2 の固有値分解、半月形・同心円など非凸データを完璧に分離する固有ベクトル法を可視化。k-means比の改善率・固有値ギャップ・メモリ使用量を即時計算。

**Category:** 機械学習・グラフ理論

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/spectral-clustering.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/spectral-clustering.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/spectral-clustering.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/spectral-clustering
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
