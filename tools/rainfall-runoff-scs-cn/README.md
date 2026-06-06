# SCS-CN 法 降雨流出量推定シミュレーター

USDA NRCS の SCS-CN（Curve Number）法で、24時間降雨量から直接流出深・流出率・流出体積・ピーク流量を推定する無料シミュレーター。Curve Number、先行降水条件 AMC、流域面積、初期損失比 λ を変えて、雨水排水・洪水ハザード評価・グリーンインフラ設計を支援します。

**Category:** 水文・環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rainfall-runoff-scs-cn.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rainfall-runoff-scs-cn.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rainfall-runoff-scs-cn.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rainfall-runoff-scs-cn
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
