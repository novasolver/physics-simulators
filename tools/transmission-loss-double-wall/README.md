# 二重壁 透過損失 TL シミュレーター — 質量-空気-質量共振

二重サッシ窓、防音室の間仕切り、スピーカー筐体などの「2枚の壁＋空気層」構造の音響透過損失 (TL) を計算します。面密度・空気層厚・吸音減衰・解析周波数を変えると、質量-空気-質量 (MAM) 共振による低周波ディップと、高周波での大幅な改善量がリアルタイムで確認できます。

**Category:** 建築音響

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/transmission-loss-double-wall.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/transmission-loss-double-wall.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/transmission-loss-double-wall.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/transmission-loss-double-wall
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
