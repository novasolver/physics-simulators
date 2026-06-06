# 半無限固体の非定常熱伝導シミュレーター

表面温度が急に変わったとき、その熱が固体の内部へどのように染み込んでいくかを計算するツールです。材料・深さ・経過時間を変えると、内部の温度・無次元温度・熱浸透深さ・表面熱流束がリアルタイムで分かり、熱拡散の速さを直感的につかめます。

**Category:** 熱工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/transient-conduction-slab.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/transient-conduction-slab.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/transient-conduction-slab.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/transient-conduction-slab
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
