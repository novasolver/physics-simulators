# 断熱材の臨界半径シミュレーター

円管や電線に断熱材を巻いたとき、放熱量がどう変わるかを計算するツールです。臨界半径 r_cr=k/h を境に、断熱材を厚くするほど放熱が増えるという直感に反する現象を、断面図とグラフでリアルタイムに確認できます。

**Category:** 伝熱工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/critical-insulation-radius.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/critical-insulation-radius.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/critical-insulation-radius.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/critical-insulation-radius
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
