# 杭基礎 支持力計算ツール（α法・β法）

杭基礎の支持力計算をα法（Meyerhof）とβ法で自動化するオンラインツールです。杭径や杭長、土質・粘着力・N値を入力するだけで、先端抵抗・周面摩擦力・全支持力をリアルタイムに計算し、安全率FS≥3の検証まで行えます。地盤工学の設計・学習に役立つCAEシミュレーターです。

**Category:** 地盤工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pile-foundation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pile-foundation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pile-foundation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pile-foundation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
