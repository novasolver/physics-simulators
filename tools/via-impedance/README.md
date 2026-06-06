# PCBビアのインダクタンス シミュレーター

プリント基板で層と層をつなぐ「ビア」は、高速信号にとって無視できない寄生インダクタンスを持ちます。ビア長さ・直径・信号周波数・並列ビア数を変えると、寄生インダクタンスと誘導リアクタンスがリアルタイムで分かり、シグナルインテグリティを損なわないビア設計を探せます。

**Category:** 高周波・RF

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/via-impedance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/via-impedance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/via-impedance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/via-impedance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
