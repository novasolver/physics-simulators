# 嫌気消化バイオガス生成シミュレーター

食品残渣・下水汚泥・畜産糞尿などの有機性廃棄物を、嫌気的微生物群がメタン発酵してバイオガスに変える「嫌気消化（AD）」プロセスを設計するツールです。投入量・VS率・比収率・消化槽容積を変えると、バイオガス量・CHP発電出力・有機物負荷（OLR）・CO₂削減効果がリアルタイムで分かります。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/anaerobic-digester-biogas.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/anaerobic-digester-biogas.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/anaerobic-digester-biogas.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/anaerobic-digester-biogas
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
