# 屋内ラドン濃度・緩和対策シミュレーター — EPA 4 pCi/L

花崗岩や堆積岩から地下空間に染み出すラドン (Radon-222) の屋内濃度を、土壌・地下構造・換気率・緩和方式から定常質量収支で推定します。EPA 4 pCi/L (148 Bq/m³) と WHO 100 Bq/m³ への適合と、BEIR VI ベースの生涯肺がんリスクを同時に表示し、SSD・通気・気密化の効果を比較できます。

**Category:** 室内空気質・放射線

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/indoor-radon-mitigation-cmc.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/indoor-radon-mitigation-cmc.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/indoor-radon-mitigation-cmc.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/indoor-radon-mitigation-cmc
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
