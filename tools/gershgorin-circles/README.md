# ゲルシュゴリンの定理シミュレーター

固有値を実際に計算しなくても、行列の成分だけからその存在範囲を絞り込めるのがゲルシュゴリンの定理です。3×3対称行列の対角成分と非対角成分を動かすと、複素平面に描かれた円板の中に固有値が必ず収まる様子をリアルタイムで観察できます。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gershgorin-circles.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gershgorin-circles.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gershgorin-circles.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gershgorin-circles
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
