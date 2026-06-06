# ブレゲの航続距離式シミュレーター

ジェット機が一回の燃料補給でどこまで飛べるかを、ブレゲの航続距離式で計算するツールです。巡航速度・揚抗比・エンジンの燃費・燃料重量比を変えると、航続距離・航続時間・重量比がリアルタイムで分かり、空力・エンジン・重量という3つの効率が航続距離をどう決めるかを直感的に学べます。

**Category:** 航空宇宙

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/aircraft-range-breguet.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/aircraft-range-breguet.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/aircraft-range-breguet.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/aircraft-range-breguet
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
