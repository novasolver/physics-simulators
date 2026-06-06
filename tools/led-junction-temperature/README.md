# LED ジャンクション温度シミュレーター

高出力 LED の順電流・順電圧・熱抵抗ネットワーク（JC + CS + HA）からジャンクション温度 T_j を求め、Arrhenius 則で L70 寿命と効率低下を予測する熱設計ツールです。ヒートシンクや MCPCB のスペックを動かすと、T_j と寿命がリアルタイムに変化します。

**Category:** 電子熱設計・照明工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/led-junction-temperature.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/led-junction-temperature.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/led-junction-temperature.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/led-junction-temperature
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
