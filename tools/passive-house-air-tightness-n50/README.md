# パッシブハウス 気密 n50 Blower Door シミュレーター

Passivhaus（パッシブハウス）の必須要件である n50 ≤ 0.6 を、Blower Door 試験の Q50（50Pa 漏気流量）から実時間計算するツールです。建物容積・外皮面積・断熱性能・換気率を変えて、等価漏気面積 ELA・浸入熱損失・年間暖房需要を可視化し、PH/EnerPHit/LEED/BELS の各規格に対する適合を判定します。

**Category:** 省エネ住宅・気密性能

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/passive-house-air-tightness-n50.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/passive-house-air-tightness-n50.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/passive-house-air-tightness-n50.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/passive-house-air-tightness-n50
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
