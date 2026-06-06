# データセンタ PUE 冷却効率シミュレーター — hyperscale

Google や Meta が達成している PUE 1.1 級の hyperscale データセンタを、IT 負荷・冷却方式・気候・吸気温・PDU 効率の 7 軸で擬似設計できるツールです。空冷から浸漬冷却まで切り替えると、年間消費電力・CO₂・水使用量がリアルタイムで動き、立地と冷却方式の選択が運用コストにどう効くかを直感的に確かめられます。

**Category:** データセンタ・冷却

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/datacenter-pue-cooling-efficiency.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/datacenter-pue-cooling-efficiency.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/datacenter-pue-cooling-efficiency.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/datacenter-pue-cooling-efficiency
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
