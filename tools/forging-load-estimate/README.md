# 自由鍛造（据込み）の鍛造荷重シミュレーター

円柱の素材を平らな金型ではさんで押し潰す「据込み鍛造」に必要なプレス荷重を見積もるツールです。素材の直径・高さ・流動応力・摩擦係数を変えると、摩擦丘による圧力上昇・平均鍛造圧力・鍛造荷重がリアルタイムで分かり、プレスや金型を正しく選定できます。

**Category:** 加工・製造

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/forging-load-estimate.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/forging-load-estimate.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/forging-load-estimate.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/forging-load-estimate
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
