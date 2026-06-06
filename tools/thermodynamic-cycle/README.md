# 熱力学サイクル計算機

カルノー・オットー・ディーゼル・ブレイトンの4つの熱力学サイクルを、P-V線図とT-s線図でリアルタイムに可視化。熱効率・仕事量・熱交換量を即座に計算するシミュレーターです。圧縮比や温度条件を変更し、理論式（例：η_Carnot = 1 - T_L/T_H）と実際のサイクル効率の関係を直感的に理解できます。

**Category:** 熱力学ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thermodynamic-cycle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thermodynamic-cycle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thermodynamic-cycle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thermodynamic-cycle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
