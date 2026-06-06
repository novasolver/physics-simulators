# 廃熱回収ボイラ HRSG シミュレーター

ガスタービンから出る 600°C の排ガスを使って蒸気を作り、もう一段「蒸気タービン発電」を回すのがコンバインドサイクル（CCGT）。このツールでは HRSG の圧力構成・ピンチ点・給水温度を動かすと、回収熱量・蒸気生成量・蒸気タービン出力・CC 合成効率がリアルタイムで分かります。

**Category:** 発電・熱機関

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/heat-recovery-steam-generator-hrsg.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/heat-recovery-steam-generator-hrsg.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/heat-recovery-steam-generator-hrsg.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/heat-recovery-steam-generator-hrsg
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
