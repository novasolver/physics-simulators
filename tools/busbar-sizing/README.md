# ブスバー（母線）サイズ選定シミュレーター

配電盤や開閉器の中で大電流を分配する銅・アルミの母線（ブスバー）を設計するツールです。通電電流とバーの幅・厚さを変えると、I²R発熱量と定常状態の温度上昇がリアルタイムで分かり、許容温度を超えない断面を選べます。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/busbar-sizing.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/busbar-sizing.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/busbar-sizing.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/busbar-sizing
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
