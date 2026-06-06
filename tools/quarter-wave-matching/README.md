# 1/4波長インピーダンス整合シミュレーター — Z_T と帯域幅

1/4波長インピーダンス整合シミュレーターは、線路 Z_0 と負荷 Z_L の間に中間線路 Z_T=√(Z_0·Z_L) を挿入する整合設計を、物理長 l=λ_g/4・反射係数 |Γ| の周波数特性・|Γ|<0.1 で満たす相対帯域幅とともにリアルタイムに計算・可視化します。

**Category:** 高周波回路シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/quarter-wave-matching.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/quarter-wave-matching.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/quarter-wave-matching.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/quarter-wave-matching
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
