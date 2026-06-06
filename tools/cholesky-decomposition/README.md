# コレスキー分解シミュレーター

対称な 3×3 行列を A=LLᵀ という下三角行列の積に分解するツールです。対角成分と非対角成分を変えると、シルベスター判定による正定値性、下三角行列 L の各成分、行列式、そして LU 分解の半分という演算量がリアルタイムで分かります。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cholesky-decomposition.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cholesky-decomposition.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cholesky-decomposition.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cholesky-decomposition
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
