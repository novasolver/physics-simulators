# Morison 式 波浪荷重シミュレーター — 海洋構造物の慣性力・抗力

Morison 式 波浪荷重シミュレーター — 海洋構造物の慣性力・抗力: jacket プラットフォームや洋上風車モノパイル基礎などの細長海洋構造物に作用する波浪荷重を、Morison 式（慣性力＋抗力）でリアルタイム算出するツールです。有義波高・周期・水深・部材径・C_D/C_M を変えると、波長・水粒子速度…'Brien-Johnson-Schaaf 1950）に基づき、jacket プラットフォームや洋上風車モノパイル基礎などの細長海洋構造物に作用する波浪荷重を計算。有義波高・周期・水深・部材径・C_D/C_M から慣性力・抗力・KC 数・全波浪荷重をリアルタイム算出。

**Category:** 海洋工学・波浪荷重

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wave-loading-morison-equation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wave-loading-morison-equation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wave-loading-morison-equation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wave-loading-morison-equation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
