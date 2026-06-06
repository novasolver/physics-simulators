# パイプ流れ圧力損失計算機

管内径・流速・流体物性を設定し、Darcy-Weisbach式による圧力損失とレイノルズ数をリアルタイム計算。局所損失の相当管長換算にも対応します。

**Category:** 流体解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pipe-flow.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pipe-flow.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pipe-flow.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pipe-flow
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
