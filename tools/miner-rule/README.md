# マイナー則 シミュレーター — 線形累積損傷による疲労寿命

Palmgren-Miner 線形累積損傷則 D = Σ(n_i/N_i) と Basquin 型 S-N 曲線 N = 0.5·(σ_a/σ_f')^(1/b) に基づき、2 レベル変動荷重の応力振幅と実サイクル数を入力すると、各レベルの許容サイクル数 N_i、累積損傷度 D、安全係数 S = 1/D を実時間計算します。両対数 S-N 曲線上に 2 つの動作点を表示し、損傷分解バーチャートで D_1, D_2, D_total と破壊基準 D=1 を可視化します。

**Category:** 疲労解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/miner-rule.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/miner-rule.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/miner-rule.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/miner-rule
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
