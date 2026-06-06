# 応答スペクトル シミュレーター — 耐震設計の SDOF 応答

設計用応答スペクトル（IBC 簡略版）を実時間に計算します。固有周期 $T$、減衰比 $\zeta$、PGA、地盤係数 $F_a = F_v$ を変えて、短周期領域 $S_{DS}$、1 秒周期 $S_{D1}$、転換周期 $T_S$、現在周期での応答加速度 $S_a$ を表示し、応答スペクトル曲線と建物模式図を同時に可視化します。

**Category:** 地震工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/response-spectrum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/response-spectrum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/response-spectrum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/response-spectrum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
