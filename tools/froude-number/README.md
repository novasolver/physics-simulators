# フルード数 シミュレーター — 開水路流れの常流・射流判定

流速 V・水深 y・単位幅流量 q・重力加速度 g からフルード数 Fr = V/√(gy) を実時間で計算し、常流・限界流・射流の3区分を自動判定。矩形開水路の限界水深 y_c と限界速度 V_c も同時に求まり、開水路側面図と V–y 領域マップの2画面で物理を直感的に理解できます。

**Category:** 水理学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/froude-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/froude-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/froude-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/froude-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
