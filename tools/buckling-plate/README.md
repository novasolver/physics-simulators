# 薄板座屈計算機（長方形板・圧縮・せん断）

縦横比・板厚・材料・境界条件・荷重タイプを切り替えるたびに、長方形薄板の座屈係数 k と臨界荷重 Ncr が即時算出され、座屈モード形状もアニメーションで確認できます。一軸圧縮・二軸圧縮・せん断のいずれにも対応。

**Category:** 構造安定性解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/buckling-plate.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/buckling-plate.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/buckling-plate.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/buckling-plate
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
