# EMアルゴリズム（1次元GMM）シミュレーター

2成分ガウス混合モデルをEM法で逐次推定する過程を可視化。Eステップ・Mステップを繰り返すたびに、混合分布が観測ヒストグラムにフィットしていく様子と、対数尤度が単調増加する様子を確認できます。

**Category:** 統計学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/em-algorithm-1d.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/em-algorithm-1d.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/em-algorithm-1d.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/em-algorithm-1d
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
