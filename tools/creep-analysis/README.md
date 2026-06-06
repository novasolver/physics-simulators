# クリープ解析計算機

Norton則でクリープひずみ速度を計算し1次〜3次クリープ曲線をリアルタイム可視化。Larson-Millerパラメータで破断寿命を予測。316SS・Inconel718・アルミ合金の3材料で比較。

**Category:** 高温材料解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/creep-analysis.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/creep-analysis.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/creep-analysis.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/creep-analysis
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
