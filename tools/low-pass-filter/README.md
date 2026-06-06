# ローパスフィルタ シミュレーター — 一次 RC・低周波通過/ノイズ平滑化

抵抗 R と容量 C で決まる一次 RC ローパスフィルタの周波数特性を、ボード線図と回路波形でリアルタイム可視化。カットオフ周波数・ゲイン・位相・時定数を確認しながら、フィルタ設計の感覚を養えます。

**Category:** 信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/low-pass-filter.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/low-pass-filter.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/low-pass-filter.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/low-pass-filter
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
