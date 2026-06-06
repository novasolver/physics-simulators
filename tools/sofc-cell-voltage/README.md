# SOFC（固体酸化物形燃料電池）V-I 特性シミュレーター

高温作動の固体酸化物形燃料電池（SOFC）の単セル性能をリアルタイム計算するツールです。動作温度・ガス圧力・電流密度・面積比抵抗を変えると、ネルンスト式から得られる理論起電力と3種類の過電圧、実際のセル電圧・電力密度・発電効率がV-I 曲線として可視化され、燃料電池スタックの運転点設計を体感できます。

**Category:** エネルギー工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sofc-cell-voltage.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sofc-cell-voltage.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sofc-cell-voltage.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sofc-cell-voltage
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
