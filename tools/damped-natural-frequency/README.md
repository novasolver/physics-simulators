# 減衰自由振動（減衰固有振動数）シミュレーター

ばね・質量・ダンパからなる1自由度系を弾いて手を離したときの「減衰自由振動」を体験するツールです。質量・ばね定数・減衰係数を変えると、非減衰固有振動数・減衰比 ζ・減衰固有振動数・対数減衰率 δ がリアルタイムで分かり、振幅が指数関数的に減っていく振動波形を見られます。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/damped-natural-frequency.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/damped-natural-frequency.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/damped-natural-frequency.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/damped-natural-frequency
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
