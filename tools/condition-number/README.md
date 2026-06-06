# 条件数シミュレーター — 行列の悪条件性

2×2行列 A の条件数 κ(A) を計算し、悪条件性を可視化するツールです。行列の成分を動かすと、特異値・行列式・解の誤差増幅率がリアルタイムで変わり、連立方程式 A·x=b の数値解がデータの微小誤差でどれだけ狂うかを単位円の像（楕円）で直感的に確かめられます。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/condition-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/condition-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/condition-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/condition-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
