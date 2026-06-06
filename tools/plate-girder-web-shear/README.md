# プレートガーダーのウェブせん断座屈シミュレーター

プレートガーダー（溶接組立桁）の背の高い薄いウェブは、せん断によって鋼が降伏するより先に「座屈」することがあります。ウェブ高さ・厚さ・補剛材間隔を変えると、弾性せん断座屈応力・せん断降伏応力・せん断耐力がリアルタイムで分かり、座屈で決まるか降伏で決まるかを判定できます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/plate-girder-web-shear.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/plate-girder-web-shear.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/plate-girder-web-shear.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/plate-girder-web-shear
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
