# コンバインドサイクル発電シミュレーター

ガスタービン（ブレイトンサイクル）と蒸気タービン（ランキンサイクル）を組み合わせた発電所をモデル化するツールです。各タービンの熱効率・燃料投入熱量・排熱回収率を変えると、総合熱効率と出力配分、煙突への損失がリアルタイムで分かり、なぜこの方式が最高効率なのかを体感できます。

**Category:** 熱力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/combined-cycle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/combined-cycle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/combined-cycle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/combined-cycle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
