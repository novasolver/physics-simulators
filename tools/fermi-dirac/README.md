# フェルミ・ディラック分布 シミュレーター — 電子の量子統計

フェルミ準位 E_F、温度 T、観測エネルギーをスライダーで動かすと、電子の占有確率 f(E) と熱エネルギー kT、隣接エネルギーとの比 f(E)/f(E+ΔE) が同時に更新。温度が上がるにつれて遷移帯が広がる様子を肌で感じられます。

**Category:** 統計力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fermi-dirac.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fermi-dirac.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fermi-dirac.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fermi-dirac
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
