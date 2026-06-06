# 座屈拘束ブレース（BRB）シミュレーター

座屈しない筋かい「座屈拘束ブレース（BRB）」を設計するツールです。芯材の断面積・降伏応力・有効長さ・設計層間変形を変えると、降伏耐力・軸剛性・延性率・1サイクルあたりの履歴消費エネルギーがリアルタイムで分かり、地震エネルギーを安定吸収する制振ブレースを検討できます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/buckling-restrained-brace.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/buckling-restrained-brace.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/buckling-restrained-brace.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/buckling-restrained-brace
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
