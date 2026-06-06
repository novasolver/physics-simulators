# 回転体の不釣合い振動シミュレーター

モーター・ファン・ポンプなど、ばねで支持された回転機械の「不釣合い振動」を解析するツールです。ロータのわずかな偏心質量・支持ばね剛性・減衰・回転数を変えると、固有振動数・振動数比・振動振幅・基礎への伝達力がリアルタイムで分かり、共振を避ける防振設計を探せます。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rotating-unbalance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rotating-unbalance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rotating-unbalance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rotating-unbalance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
