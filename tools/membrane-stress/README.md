# 薄膜・メンブレン応力解析シミュレーター

内圧を受ける球殻・円筒殻・円錐殻の経線応力 σφ と周応力 σθ をラプラス・ヤング方程式に基づきリアルタイム計算。Von Mises 応力・安全率を算出し、圧力容器・タンクの板厚設計に活用できます。

**Category:** 構造解析・殻理論

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/membrane-stress.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/membrane-stress.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/membrane-stress.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/membrane-stress
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
