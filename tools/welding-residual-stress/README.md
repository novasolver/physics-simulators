# 溶接残留応力・変形量計算機

溶接残留応力と変形量を簡易固有ひずみ法で計算するシミュレーターツールです。熱入力や板厚、材料条件を入力すると、溶接継手の角変形や横収縮量、断面の応力分布をリアルタイムに可視化。予熱温度やPWHTの影響も評価でき、設計・品質予測に役立ちます。

**Category:** 溶接工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/welding-residual-stress.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/welding-residual-stress.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/welding-residual-stress.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/welding-residual-stress
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
