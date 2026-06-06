# 熱電対のゼーベック起電力シミュレーター

2種類の金属線を接合した熱電対が、ゼーベック効果でどれだけの起電力を生むかを計算するツールです。熱接点と冷接点の温度、ゼーベック係数、計測アンプのゲインを変えると、熱起電力・冷接点補償電圧・増幅後の出力電圧がリアルタイムで分かります。

**Category:** 計測工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thermocouple-seebeck-emf.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thermocouple-seebeck-emf.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thermocouple-seebeck-emf.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thermocouple-seebeck-emf
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
