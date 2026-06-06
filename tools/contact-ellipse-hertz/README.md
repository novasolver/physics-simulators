# 楕円接触面ヘルツシミュレーター — 一般ヘルツ接触

クロス円筒など主曲率半径が方向で異なる接触で生じる楕円形の接触面を、長半径a・短半径b・最大接触圧p_maxとしてリアルタイムに算出します。鋼物体（E=210GPa, ν=0.3）固定の簡易モデルです。

**Category:** 接触力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/contact-ellipse-hertz.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/contact-ellipse-hertz.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/contact-ellipse-hertz.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/contact-ellipse-hertz
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
