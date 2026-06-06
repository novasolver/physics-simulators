# グラショフ数 シミュレーター — 自然対流の特性数

自由対流の浮力／粘性比 Gr=gβΔTL³/ν² をリアルタイム計算。温度差・特性長・熱膨張係数・動粘性係数からレイリー数 Ra=Gr·Pr、Churchill-Chu相関のNu、層流/乱流判定を求め、縦平板自然対流境界層とRa-Nu線図を可視化します。

**Category:** 熱伝達シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/grashof-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/grashof-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/grashof-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/grashof-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
