# Li 電池 リチウム析出 負極過電位シミュレーター

リチウムイオン電池の負極で起きる「リチウム析出（プレーティング）」を Butler-Volmer 式で評価するツールです。負極材料・充電 C レート・セル温度・粒径などを変えると、負極過電位と析出余裕電位、サイクル寿命がリアルタイムで分かり、低温急速充電に強い設計を探せます。

**Category:** Li 電池劣化・析出

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lithium-plating-anode-overpotential.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lithium-plating-anode-overpotential.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lithium-plating-anode-overpotential.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lithium-plating-anode-overpotential
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
