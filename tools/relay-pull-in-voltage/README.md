# 電磁リレーのプルイン電圧シミュレーター

小さな制御信号で大きな電力回路を切り替える電磁リレーの動作を設計するツールです。コイル巻数・抵抗・印加電圧・空隙・復帰ばね力を変えると、電磁吸引力とプルイン（動作）電圧がリアルタイムで分かり、確実に吸着して接点を切り替えるリレーを探せます。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/relay-pull-in-voltage.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/relay-pull-in-voltage.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/relay-pull-in-voltage.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/relay-pull-in-voltage
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
