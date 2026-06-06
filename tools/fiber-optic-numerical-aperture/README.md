# 光ファイバの開口数（NA）シミュレーター

光ファイバがどれだけ光を集められるかを示す「開口数（NA）」を計算するツールです。コアとクラッドの屈折率、コア径、波長を変えると、受光角・Vパラメータ・モード数がリアルタイムで分かり、単一モードと多モードの境界を直感的に確かめられます。

**Category:** 光学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fiber-optic-numerical-aperture.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fiber-optic-numerical-aperture.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fiber-optic-numerical-aperture.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fiber-optic-numerical-aperture
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
