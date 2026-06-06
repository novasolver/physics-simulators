# 超音波の減衰シミュレーター

医用超音波のパルスが生体内を進むとき、吸収と散乱でエネルギーをどれだけ失うかを計算するツールです。周波数・伝搬深さ・減衰係数を変えると、片道減衰・往復減衰・半価層・撮像可能深度がリアルタイムで分かり、分解能と到達深度のトレードオフを体感できます。

**Category:** 音響工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ultrasound-attenuation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ultrasound-attenuation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ultrasound-attenuation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ultrasound-attenuation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
