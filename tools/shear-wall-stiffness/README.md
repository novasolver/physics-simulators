# 耐震壁の水平剛性シミュレーター

地震や風による水平力に抵抗する耐震壁（せん断壁）の水平剛性を計算するツールです。壁の高さ・長さ・厚さを変えると、曲げ変形とせん断変形、全水平変位、水平剛性がリアルタイムで分かり、壁がスレンダー寄りかずんぐり寄りかで支配する変形がどう変わるかを確かめられます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/shear-wall-stiffness.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/shear-wall-stiffness.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/shear-wall-stiffness.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/shear-wall-stiffness
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
