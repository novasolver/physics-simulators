# 送電線・船舶 海水着氷シミュレーター — ISO 12494 Makkonen 式

送電線・船舶デッキ・風車ブレード・洋上構造物に積もる氷の量を、ISO 12494 と Makkonen 着氷モデルで予測するツールです。気温・風速・液水含有率・粒径・暴露時間を変えると、衝突効率 α1、着氷率、氷厚、自重荷重、ISO 12494 厚さクラスがリアルタイムで分かります。

**Category:** 寒冷地構造・着氷

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/saltwater-icing-power-line.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/saltwater-icing-power-line.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/saltwater-icing-power-line.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/saltwater-icing-power-line
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
