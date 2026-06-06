# FIR フィルタ設計 シミュレーター — 窓関数法

窓関数法により線形位相 FIR ローパスフィルタを設計するシミュレーター。Hamming・Blackman などの窓を理想 sinc に掛け、タップ数・カットオフを変えてインパルス応答、振幅応答 (dB)、遷移帯幅、阻止帯減衰、群遅延をリアルタイム可視化します。

**Category:** ディジタル信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fir-filter-design.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fir-filter-design.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fir-filter-design.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fir-filter-design
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
