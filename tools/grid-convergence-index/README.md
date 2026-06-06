# グリッド収束指数 (GCI) シミュレーター

CFDや有限要素解析で「メッシュをどこまで細かくすれば信頼できるか」を定量化するツールです。細・中・粗の3メッシュでの解を入力すると、ASME V&V 20 標準の Roache 法で観測収束次数・Richardson補外値・細メッシュGCI・漸近収束チェックがリアルタイムに求まります。

**Category:** 検証・妥当性確認 (V&V)

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/grid-convergence-index.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/grid-convergence-index.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/grid-convergence-index.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/grid-convergence-index
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
