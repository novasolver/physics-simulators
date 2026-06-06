# ハイパスフィルタ シミュレーター — 一次 RC・高周波通過/直流カット

抵抗 R と容量 C で決まる一次 RC ハイパスフィルタの周波数特性を、ボード線図と回路波形でリアルタイムに可視化。カットオフ周波数・ゲイン・位相・時定数を確認しながら DC 除去や AC 結合の設計を学べます。

**Category:** 信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/high-pass-filter.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/high-pass-filter.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/high-pass-filter.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/high-pass-filter
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
