# 湿式（ベンチュリ）スクラバー粒子除去効率シミュレーター

高速ガス流をスロート部で水と接触させて PM/煤塵を捕集するベンチュリ型湿式スクラバーを、Calvert/Yung モデルでリアルタイム評価します。粒子径・ガス速度・L/G 比・スロート長を変えると、水滴径・Stokes 数・透過率・除去効率・圧力損失が即座に更新され、大気汚染防止装置の初期設計と感度検討ができます。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wet-scrubber-efficiency.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wet-scrubber-efficiency.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wet-scrubber-efficiency.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wet-scrubber-efficiency
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
