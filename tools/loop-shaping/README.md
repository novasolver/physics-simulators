# ループシェイピング設計シミュレーター — Bode 線図と安定余裕

プロセス G_p と PI 補償 C の開ループ周波数応答 L=C·G_p をリアルタイム描画。ゲイン交差周波数・位相余裕・ゲイン余裕・帯域幅を変化させて、古典制御の設計感覚を体得できます。

**Category:** 制御工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/loop-shaping.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/loop-shaping.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/loop-shaping.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/loop-shaping
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
