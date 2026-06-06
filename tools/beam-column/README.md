# 梁柱の座屈・P-M相関図シミュレーター

EN 1993-1-1準拠の梁柱座屈・P-M相関図シミュレーター。軸力と曲げモーメント同時受載時の照査をリアルタイム計算し、設計点の安全性をPASS/FAILで即座に判定。座屈検証に必須のツール。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/beam-column.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/beam-column.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/beam-column.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/beam-column
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
