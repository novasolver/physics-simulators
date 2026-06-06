# aircraft-performance

NovaSolverの航空機性能計算機は、標準大気モデル(ISA)に基づき、翼パラメータと推力から失速速度・巡航速度・上昇率・航続距離をリアルタイムで算出します。抗力極曲線と速度特性をグラフで可視化。主要な性能パラメータを理論式で解説し、設計解析をサポートする無料オンラインツールです。

**Category:** 航空宇宙

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/aircraft-performance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/aircraft-performance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/aircraft-performance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/aircraft-performance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
