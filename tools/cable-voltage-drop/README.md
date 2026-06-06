# ケーブルの電圧降下シミュレーター

電力ケーブルに負荷電流を流すと、導体の抵抗のぶんだけ電圧が下がります。負荷電流・ケーブル長さ・導体断面積・配線方式を変えると、電圧降下・電圧降下率・電力損失・負荷端電圧がリアルタイムで分かり、許容範囲に収まる電線サイズを探せます。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cable-voltage-drop.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cable-voltage-drop.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cable-voltage-drop.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cable-voltage-drop
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
