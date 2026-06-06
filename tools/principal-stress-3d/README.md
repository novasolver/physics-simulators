# 3D 主応力 シミュレーター — 応力テンソルの固有値

3 次元応力テンソル (σx, σy, σz, τxy) を直接スライダーで指定し、3 つの主応力 σ1≥σ2≥σ3、最大せん断応力 τ_max、平均応力 σ_m を固有値解析でリアルタイム算出する応力解析シミュレーターです。3 つのモール円の重ね描きと主応力バーで応力状態を直感的に可視化でき、降伏・破壊評価の出発点となる主応力解析を素早く確認できます。

**Category:** 応力解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/principal-stress-3d.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/principal-stress-3d.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/principal-stress-3d.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/principal-stress-3d
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
