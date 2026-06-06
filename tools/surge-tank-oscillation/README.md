# サージタンクの水位振動シミュレーター

水力発電所の導水路に設けるサージタンク（調圧水槽）の水位振動を解析するツールです。トンネルの長さと断面積、タンクの断面積、定常流速を変えると、負荷遮断後に起きる無減衰マス振動の振動周期と最大サージ振幅がリアルタイムで分かります。

**Category:** 流体工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/surge-tank-oscillation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/surge-tank-oscillation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/surge-tank-oscillation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/surge-tank-oscillation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
