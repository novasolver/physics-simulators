# 総合熱伝達係数（U値）シミュレーター

熱交換器や配管壁・建物外壁を横切る熱流の「総合熱伝達係数 U」を計算するツールです。内側対流・壁の伝導・外側対流・汚れ層の四つの熱抵抗を直列合成し、どこが伝熱を律速しているかをリアルタイムに可視化します。

**Category:** 熱工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/overall-heat-transfer-coefficient.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/overall-heat-transfer-coefficient.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/overall-heat-transfer-coefficient.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/overall-heat-transfer-coefficient
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
