# 電気化学腐食シミュレーター

アノード・カソード反応のターフェル定数を入力するだけで、Evans 図（E-log i 線図）上の腐食電位 Ecorr・腐食電流密度 icorr・腐食速度 mm/year をリアルタイム計算する電気化学シミュレーター。混合電位理論を可視化します。

**Category:** 電気化学 / 腐食工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/corrosion-electrochemical.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/corrosion-electrochemical.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/corrosion-electrochemical.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/corrosion-electrochemical
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
