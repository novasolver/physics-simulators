# アクティブ磁気軸受 AMB ロータ剛性シミュレーター

電磁石でロータを非接触浮上させるアクティブ磁気軸受（AMB）の設計ツールです。ロータ質量・回転数・エアギャップ・コイル巻数・バイアス電流から、極吸引力・軸受剛性・自然周波数・臨界速度比・消費電力をリアルタイムで計算し、ターボ分子ポンプやフライホイールのような超高速回転機械の浮上系を試せます。

**Category:** 磁気軸受・回転機械

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/magnetic-bearing-rotor-stiffness.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/magnetic-bearing-rotor-stiffness.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/magnetic-bearing-rotor-stiffness.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/magnetic-bearing-rotor-stiffness
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
