# フロート式面積流量計（ロータメータ）シミュレーター

テーパ管の中にフロート（浮子）を入れた「ロータメータ」の流量を計算するツールです。フロートの径・密度や流体の密度、管のテーパ率を変えると、体積流量・すきま面積・流速がリアルタイムで分かり、フロート位置と流量がほぼ直線で対応する仕組みを体感できます。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rotameter.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rotameter.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rotameter.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rotameter
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
