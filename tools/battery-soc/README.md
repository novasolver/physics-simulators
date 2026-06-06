# バッテリーSOC・充放電シミュレーター

容量・内部抵抗・Cレートを設定して、等価回路モデルによる放電曲線（電圧 vs SOC）をリアルタイム可視化。Li-ion / LFP / NiMH の 3種に対応し、劣化サイクルと高レート放電の影響を体験できます。

**Category:** 電気化学・エネルギー

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/battery-soc.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/battery-soc.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/battery-soc.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/battery-soc
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
