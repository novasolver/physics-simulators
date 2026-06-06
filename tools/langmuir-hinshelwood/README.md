# Langmuir-Hinshelwood 表面反応速度シミュレーター

不均一系触媒の表面で反応物 A と B が競争的に吸着し、隣り合うサイトで反応する Langmuir-Hinshelwood 機構を可視化するツールです。吸着平衡定数や分圧を変えると、表面被覆率と反応速度がリアルタイムに変化し、分圧に対して速度が極大を持つ LH 特有の非単調な挙動を確かめられます。

**Category:** 化学反応工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/langmuir-hinshelwood.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/langmuir-hinshelwood.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/langmuir-hinshelwood.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/langmuir-hinshelwood
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
