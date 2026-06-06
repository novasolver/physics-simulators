# 熱電性能指数 ZT シミュレーター

温度差を電気に変える熱電材料の良し悪しは、無次元数 ZT = α²σT/κ ただ1つで決まります。Seebeck係数 α、電気伝導率 σ、熱伝導率 κ、動作温度と高温側／低温側温度を動かして、パワーファクタからカルノー効率、実発電効率までを同時に観察できます。

**Category:** エネルギー工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thermoelectric-zt-figure.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thermoelectric-zt-figure.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thermoelectric-zt-figure.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thermoelectric-zt-figure
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
