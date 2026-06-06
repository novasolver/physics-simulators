# 棄却サンプリングシミュレーター — モンテカルロ標本生成

p(x) から直接サンプリングできないとき、扱いやすい q(x) を M 倍に膨らませて p(x) を覆い、受理確率 p(x)/(M·q(x)) で標本を採るのが棄却サンプリング。Beta(2,5) や 2 峰混合分布で受理・棄却点の散布と理論効率 1/M を体感できます。

**Category:** 数理・統計シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rejection-sampling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rejection-sampling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rejection-sampling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rejection-sampling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
