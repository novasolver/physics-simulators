# アイソパラメトリック写像シミュレーター — 4節点四辺形要素

基準正方形 (ξ,η)∈[-1,1]² から物理座標 (x,y) への写像とヤコビ行列式を可視化。コーナー節点を動かして、要素歪みと反転（detJ≤0）が起こる仕組みを学べます。

**Category:** FEMシミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/isoparametric-mapping.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/isoparametric-mapping.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/isoparametric-mapping.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/isoparametric-mapping
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
