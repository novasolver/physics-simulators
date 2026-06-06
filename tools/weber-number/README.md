# ウェーバー数 シミュレーター — 液滴の慣性 vs 表面張力

密度 ρ・速度 V・特性長 L・表面張力 γ からウェーバー数 We = ρV²L/γ をリアルタイムに計算し、液滴の維持（We&lt;1）・振動変形（1≤We&lt;12）・分裂（We≥12）の領域を判定します。臨界分裂速度 Vc と重力支配判定のボンド数 Bo も同時表示し、噴霧・ディーゼル燃料微粒化・雨滴破砕などの現象を直感的に学べます。

**Category:** 微粒化・噴霧シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/weber-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/weber-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/weber-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/weber-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
