# 基礎加振の振動伝達率シミュレーター

床から伝わってくる振動を、ばねダンパ式の防振マウントでどれだけ遮断できるかを体験するツールです。系の固有振動数・減衰比・加振振動数・基礎の振幅を変えると、振動数比・伝達率・絶縁効率・共振増幅率がリアルタイムで分かり、機器を振動から守る防振設計を検討できます。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/base-excitation-transmissibility.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/base-excitation-transmissibility.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/base-excitation-transmissibility.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/base-excitation-transmissibility
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
