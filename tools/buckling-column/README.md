# 柱の座屈計算機 — オイラー荷重・ジョンソン式・安全率

端末条件・断面・材料・長さを設定するだけで座屈荷重 Pcr を自動計算。細長比に応じてオイラー式とジョンソン式を自動切り替え。Pcr vs L と σcr vs λ のグラフをリアルタイム表示。

**Category:** 構造解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/buckling-column.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/buckling-column.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/buckling-column.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/buckling-column
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
