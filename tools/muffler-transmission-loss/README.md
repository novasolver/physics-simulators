# マフラー（消音器）の透過損失シミュレーター

音を「吸う」のではなく「反射して戻す」拡張室型マフラーを設計するツールです。拡張室と接続管の断面積比、室の長さ、周波数を変えると、透過損失（消音量）と、消音が効かない素通り周波数がリアルタイムで分かります。

**Category:** 音響工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/muffler-transmission-loss.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/muffler-transmission-loss.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/muffler-transmission-loss.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/muffler-transmission-loss
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
