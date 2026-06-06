# メッシュ収束・Richardson外挿・GCI

メッシュ収束性の検証はCAE結果の信頼性確保に不可欠です。本記事では、メッシュを系統的に細かくして解の変化を調べるメッシュ収束解析の手法、その結果を利用して真の解を推定するRichardson外挿法、そして収束性を定量的に評価する指標GCI（Grid Convergence Index）について、その理論と実践的な手順を解説します。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/mesh-convergence.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/mesh-convergence.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/mesh-convergence.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/mesh-convergence
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
