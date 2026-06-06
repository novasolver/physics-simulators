# むだ時間のパデ近似シミュレーター

純粋なむだ時間 e^(−sT) を有理伝達関数で近似する「パデ近似」を体験するツールです。近似次数やむだ時間を変えると、位相特性・有効帯域、そして右半面零点が生み出すステップ応答の初期アンダーシュートがリアルタイムで分かります。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pade-delay-approximation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pade-delay-approximation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pade-delay-approximation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pade-delay-approximation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
