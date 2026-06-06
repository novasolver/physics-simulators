# 差動ペアインピーダンス計算機 — USB / HDMI 100Ω 差動配線

差動ペアインピーダンス計算機は、USB・HDMI・PCIe 等の差動配線について、線幅・線間・基板厚・誘電率から差動 Z_diff、奇モード Z_odd、偶モード Z_even をリアルタイム計算し、90Ω・100Ω 目標との差を可視化します。

**Category:** 高速デジタル / RF

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/differential-pair-impedance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/differential-pair-impedance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/differential-pair-impedance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/differential-pair-impedance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
