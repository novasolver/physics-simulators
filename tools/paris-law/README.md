# Paris則 き裂進展・残余寿命シミュレーター

Paris則 da/dN = C(ΔK)^m を使い、き裂進展速度・残余疲労寿命・臨界き裂長さをリアルタイム計算。材料定数C/m・初期き裂・応力範囲を変えて破壊モードを直感的に比較できます。

**Category:** 疲労破壊

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/paris-law.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/paris-law.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/paris-law.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/paris-law
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
