# パワーMOSFETのスイッチング損失シミュレーター

DC-DCコンバータやモータドライブで使うパワーMOSFETの「スイッチング損失」と「導通損失」をリアルタイム計算します。電圧・電流・周波数・立ち上がり時間を変えると、全損失と接合部温度上昇がすぐに分かり、放熱設計と周波数選定の見当をつけられます。

**Category:** 電力電子

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/mosfet-switching-loss.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/mosfet-switching-loss.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/mosfet-switching-loss.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/mosfet-switching-loss
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
