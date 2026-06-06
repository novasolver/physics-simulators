# 等張回帰 シミュレーター — 単調制約とPAV

単調性制約だけを仮定する非パラメトリック回帰「等張回帰 (Isotonic Regression)」を、サンプル数・雑音レベル・制約方向を変えながらリアルタイムに観察できるツールです。PAV (Pool Adjacent Violators) アルゴリズムの挙動、違反点数、プールブロック数、OLS との MSE 比を可視化します。

**Category:** 非パラメトリック回帰

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/isotonic-regression.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/isotonic-regression.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/isotonic-regression.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/isotonic-regression
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
