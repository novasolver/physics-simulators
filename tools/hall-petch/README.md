# ホール・ペッチの式 シミュレーター — 結晶粒径による強化

摩擦応力 σ_0、ホール・ペッチ係数 k_H、平均結晶粒径 d からホール・ペッチの式 σ_y = σ_0 + k_H/√d をリアルタイムに計算し、多結晶金属の降伏応力を可視化します。目標降伏応力 σ_target に必要な粒径 d_req と、結晶粒を 1/10 に微細化したときの強化倍率を同時表示し、TMCP 鋼や ECAP 加工された超微細粒材料の強化機構を直感的に学べます。

**Category:** 材料強度シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hall-petch.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hall-petch.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hall-petch.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hall-petch
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
