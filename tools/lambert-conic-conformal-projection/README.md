# ランベルト正角円錐図法 シミュレーター

2つの標準緯線で地球を「割る」ように接する円錐に地表を投影する LCC（Lambert Conformal Conic）の挙動を、円錐定数 n、投影座標 (x, y)、スケール係数、歪みのリアルタイム計算で体験できるツールです。米国 SPCS・国際航空図 ONC・気象チャートで実際に使われている中緯度の標準投影の感覚をつかめます。

**Category:** 地図学・GIS

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lambert-conic-conformal-projection.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lambert-conic-conformal-projection.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lambert-conic-conformal-projection.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lambert-conic-conformal-projection
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
