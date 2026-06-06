# PID調整法比較ツール（Z-N / IMC / SIMC）

PID調整法比較ツール（Z-N / IMC / SIMC）でFOPDTモデルのゲイン・時定数・むだ時間から4手法のPIDパラメータを同時計算。ステップ応答とISE/IAE/ITAEで安定余裕を比較。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pid-tuning.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pid-tuning.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pid-tuning.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pid-tuning
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
