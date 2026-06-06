# トーマス法（三重対角行列アルゴリズム）シミュレーター

三重対角線形システムを O(n) で解くトーマス法（TDMA）を体験するツールです。1次元ポアソン境界値問題 −u''=f を離散化して解き、前進消去から後退代入までの流れと、解析解との誤差をリアルタイムで確認できます。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thomas-algorithm.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thomas-algorithm.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thomas-algorithm.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thomas-algorithm
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
