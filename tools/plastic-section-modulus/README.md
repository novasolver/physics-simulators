# 塑性断面係数シミュレーター

梁の断面が「最初に降伏する瞬間」から「断面全体が降伏して塑性ヒンジになる瞬間」まで、どれだけ余力を持つかを調べるツールです。矩形・中実円形・I形の寸法を変えると、弾性断面係数 S・塑性断面係数 Z・形状係数 f・降伏モーメント My・全塑性モーメント Mp がリアルタイムで分かります。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/plastic-section-modulus.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/plastic-section-modulus.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/plastic-section-modulus.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/plastic-section-modulus
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
