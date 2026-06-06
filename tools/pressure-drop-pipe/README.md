# 管内圧力損失計算機（ダルシー-ワイズバッハ）

管径・管長・流量・流体を設定して、レイノルズ数・摩擦係数f・主損失・局所損失（エルボ・バルブ）を含む総圧力損失をリアルタイム計算。ムーディ線図に現在の動作点を表示。

**Category:** 配管圧力損失計算

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pressure-drop-pipe.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pressure-drop-pipe.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pressure-drop-pipe.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pressure-drop-pipe
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
