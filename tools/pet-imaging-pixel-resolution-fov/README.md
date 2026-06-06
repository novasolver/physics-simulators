# PET イメージング 空間分解能・FOV

陽電子放出断層撮影（PET）の空間分解能・横断 FOV・軸方向 FOV・検出立体角を計算するシミュレーターです。リング径・結晶サイズ・同位元素（¹⁸F-FDG、¹¹C、⁸²Rb、⁶⁸Ga）・投与量・スキャン時間を変えると、結晶ピッチ・陽電子飛程・非共線性の3成分から合成された分解能と、Long Axial FOV PET の感度メリットがリアルタイムで分かります。

**Category:** 核医学・PET

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pet-imaging-pixel-resolution-fov.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pet-imaging-pixel-resolution-fov.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pet-imaging-pixel-resolution-fov.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pet-imaging-pixel-resolution-fov
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
