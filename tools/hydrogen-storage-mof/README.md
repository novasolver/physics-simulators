# 水素貯蔵 MOF シミュレーター

金属有機構造体（MOF）に水素を物理吸着させて貯蔵するシステムを設計するツールです。MOF 材料・温度・圧力・MOF 質量を変えると、吸着できる水素量（wt%・体積密度）、目標 H₂ 質量に必要な MOF 質量、DOE 2025 目標との達成度、コストがリアルタイムで分かります。

**Category:** 水素エネルギー・吸着材料

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hydrogen-storage-mof.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hydrogen-storage-mof.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hydrogen-storage-mof.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hydrogen-storage-mof
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
