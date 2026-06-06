# 能動磁気軸受 AMB ラジアル荷重シミュレーター

電磁石でロータを非接触浮上させる能動磁気軸受（AMB）を設計するツールです。ロータ質量・回転数・空隙・バイアス電流・磁極面積・制御ゲインを変えると、最大磁気力・電流剛性・負値の位置剛性・浮上安定性・コイル消費電力がリアルタイムで分かり、ターボ分子ポンプや人工心臓ポンプの磁気浮上ロータを設計できます。

**Category:** メカトロニクス・回転機械

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/magnetic-bearing-radial-load.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/magnetic-bearing-radial-load.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/magnetic-bearing-radial-load.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/magnetic-bearing-radial-load
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
