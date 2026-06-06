# 地震応答スペクトル Sa/Sv/Sd シミュレーター

地震応答スペクトル（Response Spectrum）は、構造の固有周期 T と減衰比 ζ から、地震時に建物が経験する最大加速度 Sa(T)、擬似速度 Sv(T)、擬似変位 Sd(T) を求める耐震設計の中核ツールです。地盤種別と再現期間・設計基準を変えると、設計層せん断と必要変形性能をリアルタイムで確認できます。

**Category:** 構造耐震設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/seismic-response-spectrum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/seismic-response-spectrum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/seismic-response-spectrum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/seismic-response-spectrum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
