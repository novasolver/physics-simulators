# アントワン式 飽和蒸気圧シミュレーター

液体の飽和蒸気圧をアントワン式 log10(P)=A−B/(C+T) で計算。温度や A・B・C 係数を変えて、蒸気圧曲線が温度に対して指数的に立ち上がる様子と、1気圧での沸点を学べます。

**Category:** 化学工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/antoine-vapor-pressure.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/antoine-vapor-pressure.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/antoine-vapor-pressure.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/antoine-vapor-pressure
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
