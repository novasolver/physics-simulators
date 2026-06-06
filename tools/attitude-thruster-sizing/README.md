# 姿勢制御スラスタ サイジングシミュレーター

人工衛星・宇宙機の姿勢制御 (RCS) と軌道維持に必要なスラスタ推力・推進剤質量を設計するツールです。宇宙機質量、モーメント腕、目標角速度、機動角度を入力すると、必要トルク・各スラスタ推力・ツィオルコフスキー式に基づくミッション総推進剤・推進剤質量比がリアルタイムで分かります。

**Category:** 宇宙工学・姿勢制御

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/attitude-thruster-sizing.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/attitude-thruster-sizing.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/attitude-thruster-sizing.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/attitude-thruster-sizing
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
