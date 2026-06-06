# PEMFC 燃料電池 分極曲線シミュレーター

固体高分子形燃料電池（PEMFC）の V-i 分極曲線を、活性化・オーミック・濃度の 3 つの過電圧に分けて可視化します。セル温度・動作圧力・交換電流密度・ターフェル勾配・内部抵抗・限界電流密度を変えると、動作点のセル電圧／出力密度／効率／水素消費量がリアルタイムに変化し、Mirai や NEXO のような実用 PEM スタックの設計トレードオフを体験できます。

**Category:** エネルギー・水素

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pem-fuel-cell-polarization.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pem-fuel-cell-polarization.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pem-fuel-cell-polarization.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pem-fuel-cell-polarization
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
