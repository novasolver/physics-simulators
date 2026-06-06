# PEMFC 水管理シミュレーター

固体高分子形燃料電池（PEMFC）の生命線である「水バランス」を可視化するツールです。電流密度・温度・圧力・膜厚・加湿条件を変えると、反応水生成・電気浸透抗力・空気持出量から膜含水率λとプロトン伝導度σが Springer モデルで即時計算され、フラッディング／ドライアウト境界が見えます。

**Category:** 燃料電池・水管理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fuel-cell-pem-water-management.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fuel-cell-pem-water-management.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fuel-cell-pem-water-management.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fuel-cell-pem-water-management
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
