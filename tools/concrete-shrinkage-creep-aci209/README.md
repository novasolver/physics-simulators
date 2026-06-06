# コンクリート 収縮・クリープ ACI 209R シミュレーター

ACI 209R-92 モデルでコンクリートの乾燥収縮ひずみとクリープ係数を計算するツールです。養生方法・載荷時年齢・湿度・v/s 比・スランプを動かすと、PC 桁橋やプレストレス部材で重要な長期総ひずみがリアルタイムで分かり、テンドンの緊張損失や橋のクリープ変位を見積もれます。

**Category:** コンクリート長期挙動

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/concrete-shrinkage-creep-aci209.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/concrete-shrinkage-creep-aci209.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/concrete-shrinkage-creep-aci209.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/concrete-shrinkage-creep-aci209
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
