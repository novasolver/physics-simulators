# ブートストラップ信頼区間シミュレーター

ブートストラップ法による信頼区間をリアルタイム計算する統計シミュレーター。原データから復元抽出を反復し、平均と中央値の 95% CI、サンプリング分布の収束を可視化。サンプル数 N と反復回数 B を変えて、CI 幅の挙動を直感的に学べます。

**Category:** 統計シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bootstrap-confidence.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bootstrap-confidence.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bootstrap-confidence.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bootstrap-confidence
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
