# ギブスサンプリング シミュレーター

MCMC（マルコフ連鎖モンテカルロ）の代表手法ギブスサンプリングで、2変量正規分布から乱数を生成します。目標相関係数・サンプル数・バーンインを変えると、条件付き分布を交互にサンプリングする階段状の経路と、標本相関が目標値へ収束していく様子がリアルタイムで分かります。

**Category:** 統計・モンテカルロ

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gibbs-sampling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gibbs-sampling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gibbs-sampling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gibbs-sampling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
