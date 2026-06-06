# ボンディングワイヤ疲労寿命計算ツール

半導体ボンディングワイヤの疲労寿命を、温度変化や材料特性から簡単に計算できるシミュレーターツールです。金、アルミ、銅ワイヤに対応し、Coffin-Manson則に基づいて破断までのサイクル数と実使用年数を推定。材料比較グラフで信頼性設計をサポートします。

**Category:** 半導体信頼性

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bond-wire.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bond-wire.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bond-wire.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bond-wire
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
