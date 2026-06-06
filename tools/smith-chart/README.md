# スミスチャートシミュレーター — 反射係数とVSWR

スミスチャートシミュレーターは、正規化負荷インピーダンス z = Z_L/Z_0 から反射係数 Γ・VSWR・自由空間波長をリアルタイム計算し、定抵抗円と定リアクタンス円のチャート上に1点プロットします。整合の直感を養う高周波・伝送線路の教育用ツールです。

**Category:** 高周波シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/smith-chart.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/smith-chart.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/smith-chart.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/smith-chart
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
