# 音圧レベルと距離減衰シミュレーター

点音源から離れるにつれて音がどれだけ小さくなるかを計算するツールです。音響パワーレベル・距離・指向性係数・暗騒音を変えると、逆二乗則による距離減衰（距離2倍で約6dB低下）と、暗騒音との合成レベル・S/Nがリアルタイムで分かります。

**Category:** 音響工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sound-pressure-distance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sound-pressure-distance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sound-pressure-distance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sound-pressure-distance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
