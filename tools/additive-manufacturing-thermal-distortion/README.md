# 金属AM 熱変形・残留応力予測シミュレーター — Inherent Strain 法

LPBF・EBM・DED で造形した金属部品の反り（warping）と残留応力を Inherent Strain 法で概算するツールです。レーザーパワー・走査速度・層厚を変えてエネルギー密度のプロセスウィンドウを確認し、Ti-6Al-4V や Inconel 718 の熱変形リスクをビルド前に評価できます。

**Category:** AM・金属粉末造形

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/additive-manufacturing-thermal-distortion.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/additive-manufacturing-thermal-distortion.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/additive-manufacturing-thermal-distortion.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/additive-manufacturing-thermal-distortion
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
