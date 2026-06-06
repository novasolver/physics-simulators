# サーモサイフォン（自然循環ループ）シミュレーター

ポンプを使わずに流体が回り続ける「サーモサイフォン」を設計するツールです。ループ高さ・管内径・加熱量を変えると、密度差だけで生まれる自然循環の流速・温度上昇・駆動圧力がリアルタイムで分かり、受動的な伝熱回路の挙動を探れます。

**Category:** 伝熱工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thermosiphon-loop.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thermosiphon-loop.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thermosiphon-loop.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thermosiphon-loop
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
