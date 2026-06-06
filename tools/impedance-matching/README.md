# インピーダンス整合 シミュレーター — 反射係数と SWR

伝送線路の特性インピーダンス Z_0 と複素負荷 Z_L、トランス比 N を入力し、反射係数 Γ・VSWR・反射率・電力伝達効率をリアルタイム計算します。スミス・チャート上に現在の整合点を表示し、整合の良し悪しを直感的に把握できます。

**Category:** 高周波回路シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/impedance-matching.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/impedance-matching.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/impedance-matching.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/impedance-matching
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
