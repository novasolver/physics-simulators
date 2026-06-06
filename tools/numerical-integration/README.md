# 数値積分法比較ツール

数値積分法比較ツールは、台形則・シンプソン則・ガウス求積・ロンベルグ積分の誤差収束をリアルタイムで可視化。各手法の理論誤差次数（例: 台形則O(h²)、シンプソン則O(h⁴)）と実際の計算誤差をlog-logグラフで比較でき、アルゴリズムの特性理解や適切な手法選択に役立ちます。

**Category:** 数理・統計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/numerical-integration.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/numerical-integration.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/numerical-integration.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/numerical-integration
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
