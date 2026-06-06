# 重要サンプリング — 裾確率の効率的推定

重要サンプリング シミュレーターで、標準正規分布の裾確率 P(X>t) を効率的に推定。直接モンテカルロ法と重要サンプリングを並列実行し、分散低減比をリアルタイムで可視化します。提案分布の平均・標準偏差を変えて、まれな事象推定の威力を体感できます。

**Category:** 数理統計シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/importance-sampling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/importance-sampling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/importance-sampling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/importance-sampling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
