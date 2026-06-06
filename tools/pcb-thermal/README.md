# PCB熱解析・ジャンクション温度計算機

熱抵抗ネットワーク Tj=Ta+P×(θjc+θcs+θsa) でPCBジャンクション温度をリアルタイム計算。BGA・QFP・TO-220・MOSFETに対応し、サーマルビアとヒートシンク設計を一括評価できます。

**Category:** 熱解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pcb-thermal.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pcb-thermal.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pcb-thermal.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pcb-thermal
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
