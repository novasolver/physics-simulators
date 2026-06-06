# Morris 法（基本効果）スクリーニングシミュレーター

大域感度解析の最安価な手法「Morris の基本効果（Elementary Effects）法」を Web 上で実行できるツールです。因子数・軌道数・グリッドレベルを変えると、μ*（重要度）と σ（非線形・相互作用）が同時に求まり、Sobol 解析に進む前にどの入力因子を残すべきかを直感的に判断できます。

**Category:** 不確かさ定量化 (UQ)

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/morris-elementary-effects.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/morris-elementary-effects.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/morris-elementary-effects.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/morris-elementary-effects
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
