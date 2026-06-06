# 成形限界図（FLD）と歪みパス可視化

Keeler-Goodwin近似のFLC曲線を描画し、歪みパス・安全マージン・板厚減少をリアルタイム可視化。材料厚さや加工硬化指数を変えて、変形が安全領域内に収まるかをインタラクティブに検証できます。

**Category:** 材料

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/forming-limit.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/forming-limit.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/forming-limit.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/forming-limit
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
