# ジョミニー焼入れ性 シミュレーター — 炭素当量と熱処理性

炭素量 C・Mn・Cr・Ni の組成から、IIW 炭素当量 CE、最大焼入れ硬度 HRC_max、理想臨界径 D_I、溶接性区分（予熱不要・軽予熱・本格予熱）を実時間に計算します。ジョミニー試験片の長手方向硬度分布と、CE に対応する必要予熱温度を可視化します。

**Category:** 熱処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/jominy-hardenability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/jominy-hardenability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/jominy-hardenability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/jominy-hardenability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
