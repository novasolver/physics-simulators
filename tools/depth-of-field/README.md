# 被写界深度シミュレーター

写真の「ピントが合って見える奥行き」を計算するツールです。焦点距離・絞り値・被写体距離・センサー判型を変えると、被写界深度（DOF）・過焦点距離・近点・遠点がリアルタイムで分かり、狙いどおりのボケやパンフォーカスを設計できます。

**Category:** 光学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/depth-of-field.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/depth-of-field.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/depth-of-field.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/depth-of-field
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
