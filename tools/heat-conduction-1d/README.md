# 1次元 非定常 熱伝導シミュレーター — 初期境界問題と陽解法

1次元非定常熱伝導シミュレーター「NovaSolver」で、熱の伝わり方を可視化。初期条件や境界条件（固定温度・断熱・対流）を自由に設定し、温度分布の時間発展をリアルタイムアニメーションで確認できます。熱拡散率の調整や材料プリセットで、教育・研究に役立つ直感的な熱伝導解析を体験しましょう。

**Category:** 熱解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/heat-conduction-1d.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/heat-conduction-1d.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/heat-conduction-1d.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/heat-conduction-1d
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
