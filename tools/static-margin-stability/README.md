# 静安定余裕（スタティックマージン）シミュレーター

航空機が「手放しでまっすぐ飛べるか」を決める縦の静安定を設計するツールです。重心位置と中立点位置を変えると、静安定余裕（スタティックマージン）とピッチ剛性 C_mα がリアルタイムで分かり、安定と操縦性のバランスがとれた機体を探せます。

**Category:** 航空宇宙

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/static-margin-stability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/static-margin-stability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/static-margin-stability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/static-margin-stability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
