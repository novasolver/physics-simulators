# ヤコビ法による固有値計算シミュレーター

対称な 3×3 行列の固有値を、ヤコビ法（平面回転の繰り返し）で求めるツールです。対角成分と非対角成分を変えると、何回の回転で対角化できるか、非対角成分がどう消えていくか、対角成分がどう固有値へ収束するかがリアルタイムで分かります。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/jacobi-eigenvalue-method.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/jacobi-eigenvalue-method.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/jacobi-eigenvalue-method.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/jacobi-eigenvalue-method
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
