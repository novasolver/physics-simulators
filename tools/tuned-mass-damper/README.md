# 同調質量ダンパー（TMD）シミュレーター

高層ビルや長大橋の揺れを抑える同調質量ダンパー（TMD）を、Den Hartogの最適同調理論で設計するツールです。主構造の質量・固有振動数・質量比・TMD減衰比を変えると、ダンパー質量、最適同調比、最適減衰比、ばね定数、そしてピーク応答倍率がリアルタイムで分かります。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tuned-mass-damper.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tuned-mass-damper.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tuned-mass-damper.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tuned-mass-damper
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
