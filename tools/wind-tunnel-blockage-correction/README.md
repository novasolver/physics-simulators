# 風洞 ブロッケージ補正シミュレーター

風洞試験部に置いた模型による壁干渉（ブロッケージ）を Maskell・Mercker 法で補正します。試験部断面・前面積・CD・風洞種別を変えると、ブロック率・補正係数 ε・補正風速・補正 CD がリアルタイムで出て、その試験条件が「無補正で発表してよいか」を判定できます。

**Category:** 風洞試験・空力計測

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wind-tunnel-blockage-correction.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wind-tunnel-blockage-correction.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wind-tunnel-blockage-correction.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wind-tunnel-blockage-correction
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
