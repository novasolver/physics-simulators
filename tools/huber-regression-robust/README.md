# Huber 回帰 ロバスト統計シミュレーター

外れ値が混ざったデータでも崩れにくい Huber 回帰（M-estimator）を体験するツールです。外れ値の割合と強度、切替閾値 δ を動かしながら、OLS（最小二乗）との推定バイアス・漸近相対効率 ARE・影響関数の上限を比べられます。

**Category:** ロバスト統計・回帰

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/huber-regression-robust.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/huber-regression-robust.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/huber-regression-robust.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/huber-regression-robust
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
