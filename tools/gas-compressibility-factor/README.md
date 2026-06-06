# 実在気体の圧縮率因子 Z シミュレーター

理想気体の式 PV=nRT は便利ですが、高圧や低温では実在気体からずれてきます。本ツールは Lee-Kesler/Pitzer の対応状態相関で、圧力・温度・臨界定数・偏心因子から圧縮率因子 Z をリアルタイムに計算します。理想気体との誤差が一目で分かり、圧縮機・パイプライン・貯蔵タンクの設計感を養えます。

**Category:** 熱力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gas-compressibility-factor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gas-compressibility-factor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gas-compressibility-factor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gas-compressibility-factor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
