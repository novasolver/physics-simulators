# クヌーセン数 シミュレーター — 希薄気体流れの流動区分

温度 T・圧力 P・分子直径 d・特性長 L から、平均自由行程 λ とクヌーセン数 Kn = λ/L を実時間で計算し、連続体・スリップ流・遷移流・自由分子流の4区分を自動判定します。スケール比較と Kn 領域マップの2画面で、流体モデル選択の物理を直感的に学べます。

**Category:** 希薄気体力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/knudsen-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/knudsen-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/knudsen-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/knudsen-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
