# プレストレスト・コンクリートの応力損失シミュレーター

PC鋼材にジャッキで与えた緊張力は、そのまま残ることはありません。弾性収縮・クリープ・乾燥収縮・鋼材リラクセーションによって少しずつ失われます。初期緊張力や断面寸法を変えると、損失の内訳と最終的に残る有効プレストレスがリアルタイムで分かります。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/prestressed-concrete-losses.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/prestressed-concrete-losses.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/prestressed-concrete-losses.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/prestressed-concrete-losses
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
