# Chirp-Z 変換 / Zoom-DFT シミュレーター — 狭帯域高分解能解析

Chirp-Z 変換シミュレーターは Zoom-DFT により任意の狭い周波数範囲を高分解能で解析します。DFT では分離できない近接 2 周波数（例：100Hz と 105Hz）を、CZT で明瞭に分離する様子をリアルタイムに可視化します。

**Category:** 信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/chirp-z-transform.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/chirp-z-transform.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/chirp-z-transform.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/chirp-z-transform
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
