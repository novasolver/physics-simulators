# 柱脚ベースプレートの支圧シミュレーター

鉄骨柱の柱脚ベースプレートが、コンクリート基礎にどんな支圧応力を与えるかを設計するツールです。軸力・曲げモーメント・プレート寸法を変えると、偏心量、核（中央1/3）の内外、最大支圧応力と浮上りの有無がリアルタイムで分かります。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/column-base-plate-pressure.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/column-base-plate-pressure.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/column-base-plate-pressure.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/column-base-plate-pressure
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
