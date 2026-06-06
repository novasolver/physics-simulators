# 噴流の衝突力シミュレーター

ノズルから噴き出す流体の噴流が、平板や曲面の羽根に当たるときに生じる衝突力を計算するツールです。ノズル径・噴流速度・流体密度・当てる面の形を変えると、運動量保存則から衝突力・流量・運動エネルギー流束がリアルタイムで分かります。

**Category:** 流体工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/jet-impact-force.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/jet-impact-force.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/jet-impact-force.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/jet-impact-force
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
