# 切梁式掘削の支保工荷重シミュレーター

地下構造物のために深く掘る切梁式掘削（ブレースカット）の山留めを設計するツールです。掘削深さ・土の重さ・切梁の間隔を変えると、テルツァギ・ペックの見かけ土圧から切梁1本の軸力や必要段数がリアルタイムで分かり、座屈に注意すべき設計を見極められます。

**Category:** 地盤工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/braced-excavation-strut.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/braced-excavation-strut.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/braced-excavation-strut.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/braced-excavation-strut
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
