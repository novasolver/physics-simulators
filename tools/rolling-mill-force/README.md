# 圧延（板圧延）の圧延荷重シミュレーター

2本の回転ロールで金属板を挟んで薄く延ばす「板圧延」を見積もるツールです。板幅・入口板厚・出口板厚・ロール半径・流動応力を変えると、圧下量・接触弧長・圧延荷重・圧延トルクがリアルタイムで分かり、圧延機にかかる巨大な荷重を簡易な平面ひずみモデルで把握できます。

**Category:** 加工・製造

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rolling-mill-force.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rolling-mill-force.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rolling-mill-force.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rolling-mill-force
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
