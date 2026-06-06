# 杭の負の摩擦力（ネガティブフリクション）シミュレーター

圧密沈下する軟弱地盤が杭を下向きに引きずる「負の摩擦力（ダウンドラッグ）」をβ法で計算するツールです。杭径・圧密層の厚さ・地盤の重さ・β係数・杭の支持力を変えると、杭にのしかかる追加荷重と残った支持力がリアルタイムで分かります。

**Category:** 地盤工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pile-negative-friction.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pile-negative-friction.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pile-negative-friction.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pile-negative-friction
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
