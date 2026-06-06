# 超音波ドップラー血流計測シミュレーター

頸動脈・心臓・脳血管の血流速度を非侵襲で測る超音波ドップラー法（PW/CW）をシミュレーションします。超音波周波数・ビーム角度・PRFを変えると、ドップラー偏移・Nyquist 速度・エイリアシング判定・最大撮像深度がリアルタイムで分かり、臨床で実現可能な測定条件を設計できます。

**Category:** 医工学・超音波

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ultrasound-doppler-flow.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ultrasound-doppler-flow.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ultrasound-doppler-flow.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ultrasound-doppler-flow
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
