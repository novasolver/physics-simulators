# ロケット ピンテルインジェクタ シミュレーター — SpaceX Merlin

SpaceX Merlin・アポロ LMDE で用いられるピンテル（針栓）インジェクタの混合・霧化を、TMR モメンタム比・噴霧コーン角・SMD（ザウター平均粒径）・混合効率・Hutt-Cramer 安定性指標として可視化します。LOX/RP-1（Merlin）・LOX/CH4（Raptor）・LOX/LH2・N2O4/MMH の4種類の推進剤組合せで設計検討ができます。

**Category:** ロケット推進・インジェクタ

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rocket-pintle-injector-mixing.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rocket-pintle-injector-mixing.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rocket-pintle-injector-mixing.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rocket-pintle-injector-mixing
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
