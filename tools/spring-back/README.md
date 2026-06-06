# スプリングバック シミュレーター — 板金曲げの弾性回復

板金純曲げ後のスプリングバック比 K = 4X³ - 3X + 1（弾性パラメータ X = σ_y·R_i/(E·t)）に基づき、除荷後の内側半径 R_f = R_i/K、90° 曲げ時の戻り角 Δθ = 90·(1-K)、および弾性パラメータ X を、降伏応力 σ_y、ヤング率 E、内側曲げ半径 R_i、板厚 t から実時間に計算します。曲げ後（青）と除荷後（赤）の板形状を重ね描きし、K-X 曲線で現在の動作点を可視化することで、スプリングバックのスケーリングを直感的に理解できます。

**Category:** 塑性加工シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/spring-back.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/spring-back.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/spring-back.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/spring-back
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
