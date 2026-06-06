# アンチワインドアップ PI 制御シミュレーター

入力飽和を伴う 1 次プロセスに対し、標準 PI・アンチワインドアップ付き PI・理想 PI の応答を比較。ワインドアップが招くオーバーシュートと、Back-calculation で巻き戻す効果を可視化します。

**Category:** 制御工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/anti-windup.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/anti-windup.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/anti-windup.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/anti-windup
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
