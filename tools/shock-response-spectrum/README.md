# 衝撃応答スペクトル（SRS, ハーフサインパルス）シミュレーター

ハーフサインパルス衝撃に対する1自由度系（SDOF）の応答を数値積分で計算するツールです。パルス加速度・パルス幅・固有振動数・減衰比を変えると、ピーク応答加速度・応答倍率・衝撃応答スペクトル（SRS）・時刻応答がリアルタイムで分かり、電子機器や梱包品の耐衝撃設計を検討できます。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/shock-response-spectrum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/shock-response-spectrum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/shock-response-spectrum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/shock-response-spectrum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
