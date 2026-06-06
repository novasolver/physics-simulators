# ベクトル場ビジュアライザー

NovaSolverのベクトル場ビジュアライザーは、2Dでインタラクティブに勾配・回転・発散を可視化します。電気双極子や磁気渦など様々な場を矢印と流線で表示。カーソルを動かすだけで発散と回転をリアルタイム計算し、クリックで流線をトレースできる直感的なシミュレーターです。

**Category:** 数学・物理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/vector-field.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/vector-field.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/vector-field.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/vector-field
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
