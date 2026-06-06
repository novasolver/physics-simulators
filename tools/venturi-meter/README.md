# ベンチュリ流量計シミュレーター

管路を緩やかに絞って差圧を作り、その差圧から体積流量を測るベンチュリ流量計を設計するツールです。上流管径・スロート径・差圧を変えると、体積流量・流速・レイノルズ数・永久圧力損失がリアルタイムで分かり、低損失で正確な流量計測を設計できます。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/venturi-meter.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/venturi-meter.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/venturi-meter.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/venturi-meter
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
