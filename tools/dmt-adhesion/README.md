# DMT粘着接触シミュレーター — Derjaguin-Muller-Toporov理論

DMT理論（Derjaguin-Muller-Toporov）で硬い弾性球の粘着接触をリアルタイム計算。表面エネルギーγ・等価弾性E*・半径R・荷重Fから接触半径とpull-off力を計算し、JKR・Hertzと比較するTaborパラメータ判定付き教育用シミュレーター。

**Category:** トライボロジー・接触力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/dmt-adhesion.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/dmt-adhesion.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/dmt-adhesion.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/dmt-adhesion
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
