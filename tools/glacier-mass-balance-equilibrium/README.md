# 氷河質量収支・平衡線高度 ELA シミュレーター

山岳氷河や氷帽の「健康診断」を行うツールです。氷河面積・平衡線高度 ELA・涵養域と消耗域の質量フラックス・気温上昇 ΔT を入力すると、新しい ELA、AAR (涵養域面積比)、全質量収支、海面上昇寄与が即座に計算されます。気候 1°C 上昇で氷河がどう後退するかを直感的に体験できます。

**Category:** 氷河学・気候変動

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/glacier-mass-balance-equilibrium.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/glacier-mass-balance-equilibrium.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/glacier-mass-balance-equilibrium.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/glacier-mass-balance-equilibrium
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
