# 義足歩行エネルギーコストシミュレーター — 切断レベル比較

切断レベル（下腿・大腿・股関節離断・両側下腿）と義足タイプ（受動・エネルギー蓄積・能動）を切り替えて、輸送コスト CoT・酸素消費量・代謝出力・％VO₂max・推奨歩行速度・疲労リスクをリアルタイムに計算します。Waters &amp; Mulroy (1999) の臨床データを参照した、リハビリ工学・能動義足設計の検討用ツールです。

**Category:** リハビリ工学・義肢

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/prosthetic-limb-energy-cost.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/prosthetic-limb-energy-cost.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/prosthetic-limb-energy-cost.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/prosthetic-limb-energy-cost
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
