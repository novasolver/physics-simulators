# 噴流衝突冷却シミュレーター — 衝突板の熱伝達

噴流衝突冷却シミュレーターは、円形ノズルから平板に衝突する空気噴流の局所熱伝達係数 h と Nusselt 数 Nu をリアルタイム計算します。ノズル流速・径・衝突距離比・温度差を変えて、滞留点での熱伝達特性を直感的に学べる電子機器冷却・ガラス強化向けツール。

**Category:** 伝熱シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/jet-impingement.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/jet-impingement.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/jet-impingement.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/jet-impingement
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
