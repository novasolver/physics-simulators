# S-N曲線・疲労寿命推定ツール

材料のS-N曲線と疲労限を入力し、Miner則による累積損傷と疲労寿命をリアルタイム推定。応力振幅・平均応力・Goodman修正を変えて安全率を確認できます。

**Category:** 疲労解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sn-curve.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sn-curve.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sn-curve.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sn-curve
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
