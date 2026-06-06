# コンデンサの充放電とエネルギーシミュレーター

RC回路のコンデンサ充放電シミュレーター。充放電曲線と蓄積エネルギーをリアルタイムグラフ表示。時定数τ、最大エネルギー、電荷量を自動計算。交流入力モードにも対応。数式（V_C(t) = V_i・e^{-t/RC}、U=1/2CV^2など）に基づく物理現象を可視化し、学習と設計を支援します。

**Category:** 電磁気・光学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/capacitor-energy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/capacitor-energy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/capacitor-energy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/capacitor-energy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
