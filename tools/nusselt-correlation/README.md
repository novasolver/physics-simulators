# Nusselt 相関 シミュレーター — 管内強制対流の Dittus-Boelter 式

管内乱流の Dittus-Boelter 相関 Nu = 0.023 Re^0.8 Pr^n を実時間に計算します。Reynolds 数・Prandtl 数・熱伝導率・管径から Nusselt 数、熱伝達率 h、熱流束、熱境界層厚さを求め、管内流れの可視化と Re-Nu 線図で強制対流の物理を直感的に理解できます。

**Category:** 熱伝達シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/nusselt-correlation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/nusselt-correlation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/nusselt-correlation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/nusselt-correlation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
