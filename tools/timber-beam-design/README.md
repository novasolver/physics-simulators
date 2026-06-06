# 木造梁の設計シミュレーター

等分布荷重を受ける単純支持の木造梁を設計するツールです。梁の幅・せい・スパン・荷重・樹種を変えると、曲げ応力・せん断応力・たわみの3つの検定がリアルタイムで分かり、どの検定が設計を支配しているかを確かめながら安全な断面を探せます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/timber-beam-design.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/timber-beam-design.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/timber-beam-design.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/timber-beam-design
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
