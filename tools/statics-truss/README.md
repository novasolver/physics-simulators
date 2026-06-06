# 静定トラス解析シミュレーター

Warren・Prattトラスのパネル数・高さ・荷重を設定し、節点法（ΣFx=0, ΣFy=0）で全部材力を自動計算。引張（青）・圧縮（赤）の色分けトラス図・部材力グラフ・応力比チャートの3タブ構成。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/statics-truss.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/statics-truss.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/statics-truss.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/statics-truss
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
