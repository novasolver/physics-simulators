# 船舶の安定（メタセントリック高さ）シミュレーター

船が「なぜ傾いても元に戻るのか」を決める鍵、メタセントリック高さ GM をリアルタイム計算するツールです。船長・船幅・喫水・重心高さを変えると、浮心 KB・メタセンタ KM・GM・横揺れ周期がその場で更新され、復原性のある船型を直感的に理解できます。

**Category:** 流体工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/metacentric-height-stability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/metacentric-height-stability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/metacentric-height-stability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/metacentric-height-stability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
