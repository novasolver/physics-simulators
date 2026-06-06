# 光干渉断層 OCT 分解能シミュレーター

光干渉断層撮影（OCT）の軸方向分解能 Δz と横方向分解能 Δx を、中心波長・帯域幅・対物NAから即座に算出するツールです。SD-OCT / SS-OCT / フェムト秒レーザーの3種を比較しながら、網膜・心血管・皮膚OCT に必要な分解能と撮像深さ、サンプリング数、B-scan時間を設計検討できます。

**Category:** 医工学・光学イメージング

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/optical-coherence-tomography.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/optical-coherence-tomography.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/optical-coherence-tomography.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/optical-coherence-tomography
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
