# 柱の有効長 シミュレーター — 支持条件と座屈荷重

柱の両端支持条件ごとに有効長係数Kを変更し、有効長Le=KL、オイラー座屈荷重Pcr=π²EI/Le²、細長比λ=Le/rをリアルタイムに表示。短柱・中間柱・長柱の領域分類も可視化します。

**Category:** 構造力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/effective-length-column.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/effective-length-column.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/effective-length-column.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/effective-length-column
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
