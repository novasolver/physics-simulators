# 応力テンソル変換シミュレーター

3次元応力テンソルの6成分を入力し、主応力・Von Mises応力・Tresca応力を即時計算。3Dモール円・応力要素図・降伏マージンをタブで可視化します。

**Category:** 構造解析 / 材料力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/stress-tensor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/stress-tensor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/stress-tensor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/stress-tensor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
