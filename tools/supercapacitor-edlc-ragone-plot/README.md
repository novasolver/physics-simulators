# スーパキャパシタ EDLC Ragone 線図

電気二重層キャパシタ（EDLC）の蓄エネルギー・電力密度・RC 時定数を計算し、Ragone 線図上でリチウムイオン電池などと比較できるツールです。容量・定格電圧・等価直列抵抗・セル質量を変えると、用途（系統バッファ／回生／UAV／エンジン始動）に対する適性がリアルタイムで判定されます。

**Category:** 蓄電・EDLC

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/supercapacitor-edlc-ragone-plot.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/supercapacitor-edlc-ragone-plot.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/supercapacitor-edlc-ragone-plot.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/supercapacitor-edlc-ragone-plot
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
