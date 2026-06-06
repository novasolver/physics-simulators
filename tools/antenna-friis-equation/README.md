# フリスの伝達公式（無線リンク）シミュレーター

自由空間を伝わる電波リンクの受信電力を、フリスの伝達公式で計算するツールです。送信電力・アンテナ利得・周波数・通信距離を変えると、自由空間伝搬損失・受信電力・リンクマージンがリアルタイムで分かり、Wi-Fiから衛星通信までの電波リンクバジェットを設計できます。

**Category:** 無線工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/antenna-friis-equation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/antenna-friis-equation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/antenna-friis-equation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/antenna-friis-equation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
