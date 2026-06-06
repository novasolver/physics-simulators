# ハプティクスデバイス 帯域・Z-Width シミュレーター

VR・外科手術ロボット・力覚グローブで使われるハプティクス（力覚提示）デバイスの設計ツールです。デバイスの慣性・粘性・サンプリング周波数・量子化ビット数を変えると、自然周波数・閉ループ帯域・Z-Width・Colgate-Brown 安定限界がリアルタイムで分かり、硬い仮想壁を安定に再現できる制御パラメータを探せます。

**Category:** 制御・人機インタフェース

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/haptic-feedback-bandwidth.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/haptic-feedback-bandwidth.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/haptic-feedback-bandwidth.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/haptic-feedback-bandwidth
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
