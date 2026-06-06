# サイフォンの流れシミュレーター

ポンプを使わずに、上側の水面より高い所を越えて液体を運ぶ「サイフォン」を解析するツールです。クレスト（最高点）の高さや落差、管の太さを変えると、流速・流量と最高点の圧力がリアルタイムで分かり、キャビテーションで流れが切れない設計を探せます。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/siphon-flow.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/siphon-flow.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/siphon-flow.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/siphon-flow
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
