# 加速度センサの周波数応答シミュレーター

加速度センサ（加速度計）は、それ自体が微小なばね・質量・ダンパ系です。固有振動数・減衰比・測定対象の周波数を変えると、応答倍率（指示値÷真値）・測定誤差・使用可能な上限周波数がリアルタイムで分かり、共振より十分低い「平坦帯域」でだけ正確に測れる理由を体験できます。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/accelerometer-frequency-response.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/accelerometer-frequency-response.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/accelerometer-frequency-response.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/accelerometer-frequency-response
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
