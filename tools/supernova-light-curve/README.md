# 超新星 光度曲線シミュレーター

恒星が一生の最後に起こす爆発「超新星 (Supernova)」。Type Ia から II-P・IIn・Ib/Ic まで、放出質量・Ni-56 質量・爆発エネルギー・距離を変えながら、Arnett 解析モデルで光度曲線とピーク絶対等級・Phillips ΔM15 をリアルタイム計算します。

**Category:** 天体物理学・恒星進化

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/supernova-light-curve.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/supernova-light-curve.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/supernova-light-curve.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/supernova-light-curve
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
