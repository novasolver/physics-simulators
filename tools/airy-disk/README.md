# エアリーディスク シミュレーター — 回折限界とレイリー分解能

波長 λ・開口直径 D・焦点比 F#・観測距離 R から、円形開口の回折限界角 θ=1.22λ/D、焦点面エアリー半径 r=1.22λ·F#、距離 R での分解能、中心ディスクエネルギー比を実時間に計算します。2D 回折パターンと 1D 強度プロファイルで望遠鏡・顕微鏡の解像度限界を直感できます。

**Category:** 光学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/airy-disk.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/airy-disk.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/airy-disk.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/airy-disk
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
