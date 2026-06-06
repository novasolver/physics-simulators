# EM アルゴリズム & Gaussian 混合モデル シミュレーター

EM (Expectation-Maximization) アルゴリズムによる GMM (Gaussian Mixture Model) の収束をシミュレートします。混合成分数 K、サンプル数、真の重なり度、共分散型を変えると、対数尤度の収束カーブ・AIC/BIC によるモデル選択・クラスタリング品質 (ARI) がリアルタイムで分かります。

**Category:** 機械学習・確率モデル

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/expectation-maximization-gmm.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/expectation-maximization-gmm.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/expectation-maximization-gmm.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/expectation-maximization-gmm
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
