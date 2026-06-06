# 二項分布シミュレーター

試行回数 n と成功確率 p を変えて二項分布 B(n,p) の PMF・CDF をリアルタイム可視化。区間確率の計算とポアソン／正規近似との比較で、離散分布の挙動を直感的に把握できます。

**Category:** 確率・統計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/binomial-distribution.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/binomial-distribution.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/binomial-distribution.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/binomial-distribution
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
