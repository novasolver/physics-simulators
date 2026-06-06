# 肺コンプライアンスと呼吸仕事シミュレーター

肺を弾性体（弾力のある袋）としてとらえ、1呼吸に必要な力学的仕事を計算するツールです。1回換気量・肺コンプライアンス・気道抵抗・呼吸数を変えると、肺を膨らませる弾性圧、空気を流す抵抗圧、そして1呼吸の弾性仕事がリアルタイムで分かります。

**Category:** バイオメカニクス

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lung-compliance-breathing.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lung-compliance-breathing.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lung-compliance-breathing.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lung-compliance-breathing
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
