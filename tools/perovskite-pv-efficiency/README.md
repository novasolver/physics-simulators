# ペロブスカイト太陽電池 J-V 特性・効率シミュレーター

第三世代の太陽電池として急成長するペロブスカイトの J-V 曲線と変換効率をリアルタイムに計算します。短絡電流・開放電圧・フィルファクタ・バンドギャップを変えると、最大出力点と Shockley-Queisser 限界に対する到達率が即座に更新され、研究セルの数値が「理論限界に対してどこまで来ているか」を直感的に把握できます。

**Category:** エネルギー工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/perovskite-pv-efficiency.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/perovskite-pv-efficiency.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/perovskite-pv-efficiency.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/perovskite-pv-efficiency
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
