# 金属積層造形 SLM レーザー溶融プール設計

金属 3D プリンタ（SLM／粉末床溶融）の核となる「レーザー溶融プール」をリアルタイム設計するツールです。レーザーパワー・スキャン速度・ハッチ間隔・層厚を変えると、体積エネルギー密度 VED と溶融プール寸法、欠陥リスク（Lack of fusion / Keyhole）、ビルドレートが即座に分かります。

**Category:** 3Dプリンタ・金属 AM

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/additive-manufacturing-laser-melt-pool.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/additive-manufacturing-laser-melt-pool.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/additive-manufacturing-laser-melt-pool.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/additive-manufacturing-laser-melt-pool
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
