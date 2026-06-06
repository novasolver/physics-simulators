# テブナン等価回路 シミュレーター — 最大電力伝達

テブナン等価電源 (V_th, R_th) に配線抵抗 R_w と負荷 R_L を直列接続した回路を解析し、負荷電流・電圧・消費電力・伝送効率を算出。最大電力伝達の条件 R_L = R_th + R_w を視覚的に学べる電気回路シミュレーターです。

**Category:** 電気回路シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thevenin-equivalent.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thevenin-equivalent.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thevenin-equivalent.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thevenin-equivalent
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
