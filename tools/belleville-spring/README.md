# 皿ばね（ベルビルワッシャ）設計シミュレーター

円錐形に成形された皿ばね（ベルビルワッシャ）を設計するツールです。外径・内径・板厚・自由高さ・たわみを変えると、ばね力・ばね定数・荷重-たわみ特性がリアルタイムで分かり、高さ比 h0/t で決まる非線形なばね特性とS字曲線を直感的に確認できます。

**Category:** 機械要素設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/belleville-spring.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/belleville-spring.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/belleville-spring.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/belleville-spring
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
