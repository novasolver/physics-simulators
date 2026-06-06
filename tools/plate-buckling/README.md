# 平板の座屈・臨界応力計算

CAE技術記事「平板の座屈・臨界応力計算」のメタディスクリプション。板寸法・材料・境界条件を設定すると、臨界座屈応力と座屈モード形状をリアルタイムで可視化。a/b比依存の座屈係数曲線も描画し、四辺単純支持板の理論解（例：鋼板の計算）と比較しながら理解を深められます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/plate-buckling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/plate-buckling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/plate-buckling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/plate-buckling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
