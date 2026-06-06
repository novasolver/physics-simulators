# 板の座屈解析

板の座屈解析シミュレーターで四辺支持薄板の座屈係数 k と臨界荷重をリアルタイム計算。アスペクト比・板厚・境界条件 (SSSS/SSCC/CCCC) を変えて座屈モード形状を可視化できる構造解析ツール。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/euler-buckling-plate.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/euler-buckling-plate.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/euler-buckling-plate.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/euler-buckling-plate
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
