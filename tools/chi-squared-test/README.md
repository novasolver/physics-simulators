# カイ二乗適合度検定 シミュレーター — Pearson 検定

4 カテゴリの観測度数 O_i を入力し、一様分布仮説に対する Pearson のカイ二乗適合度検定 χ² = Σ(O−E)²/E、自由度 df、5% 棄却限界、p 値、判定をリアルタイム計算。観測 vs 期待のヒストグラムとカイ二乗分布曲線で結果を直感的に可視化します。

**Category:** 統計学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/chi-squared-test.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/chi-squared-test.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/chi-squared-test.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/chi-squared-test
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
