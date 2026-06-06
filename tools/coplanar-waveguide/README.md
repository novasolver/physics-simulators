# コプレーナ導波路 (CPW) シミュレーター — 特性インピーダンス Z_0

コプレーナ導波路 (CPW) シミュレーターは、中心線幅・ギャップ・比誘電率・周波数から特性インピーダンス Z_0・実効誘電率・実効波長 λ_g をリアルタイム計算します。Wheeler/Hilberg 楕円積分近似で 50Ω RF 配線の幅とギャップを直感的に学べます。

**Category:** RF・マイクロ波シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/coplanar-waveguide.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/coplanar-waveguide.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/coplanar-waveguide.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/coplanar-waveguide
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
