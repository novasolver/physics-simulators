# 遠心機・回転体応力解析ツール

外径・内径・回転速度・材料を変えて、ディスクの半径方向応力 σr と円周方向応力 σθ の分布をリアルタイムに可視化。破裂速度と安全率も自動算出します。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/centrifuge-stress.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/centrifuge-stress.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/centrifuge-stress.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/centrifuge-stress
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
