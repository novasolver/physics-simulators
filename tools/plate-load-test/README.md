# 平板載荷試験シミュレーター

小さな載荷板で測った地盤の沈下を、実際の基礎の沈下へ「スケールアップ」して予測するツールです。載荷板幅・基礎幅・載荷圧・土質を変えると、沈下のスケール係数・実基礎の予測沈下量・地盤反力係数がリアルタイムで分かります。

**Category:** 地盤工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/plate-load-test.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/plate-load-test.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/plate-load-test.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/plate-load-test
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
