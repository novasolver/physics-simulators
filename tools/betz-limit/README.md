# ベッツ限界 シミュレーター — 風車の理論最大効率

風車のベッツ限界シミュレーター。風速・ローター直径・軸方向誘導係数 a・空気密度を変えて、パワー係数 C_P(a) = 4a(1-a)² と取り出し動力をリアルタイムに可視化。最適 a=1/3 で C_P,max = 16/27 ≈ 0.593 となるベッツの上限を直感的に理解できます。

**Category:** 風力エネルギーシミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/betz-limit.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/betz-limit.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/betz-limit.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/betz-limit
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
