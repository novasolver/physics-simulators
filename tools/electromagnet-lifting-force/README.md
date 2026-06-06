# 電磁石の吸引力シミュレーター

コイルに電流を流したホースシュー型電磁石が、鉄板をどれだけの力で吸い付けるかをリアルタイムに計算するツールです。コイル巻数・電流・空隙・磁極面積・鉄心の比透磁率を変えると、起磁力 NI から磁束 Φ・磁束密度 B・Maxwell引力 F = B²A/(2μ₀) までが連動して動き、空隙を詰めることがなぜ最大の設計変数なのかが体感できます。

**Category:** 電磁気

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/electromagnet-lifting-force.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/electromagnet-lifting-force.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/electromagnet-lifting-force.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/electromagnet-lifting-force
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
