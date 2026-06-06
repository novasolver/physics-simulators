# 有機ランキンサイクル ORC シミュレーター

水ではなく低沸点の有機流体（R245fa、R134a、n-Pentane、Toluene）を使い、80〜300°C の低温廃熱から電力を取り出す ORC を設計するツールです。熱源温度・冷却温度・流量・再生器の有無を変えると、正味出力・熱効率・Carnot 効率比がリアルタイムで分かり、産業廃熱・地熱・バイオマス発電の事前検討に使えます。

**Category:** エネルギー工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/organic-rankine-cycle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/organic-rankine-cycle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/organic-rankine-cycle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/organic-rankine-cycle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
