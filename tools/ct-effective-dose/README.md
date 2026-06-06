# CT検査の実効線量推定シミュレーター — DLPと変換係数

CT装置の DICOM/RDSR に記録される CTDI_vol とスキャン長から、患者の実効線量 E（mSv）を推定するツールです。撮影部位ごとの変換係数 k を用いて、自然放射線換算・生涯がんリスク増加までリアルタイムで表示し、医療被ばくの最適化（ALARA）を考えるための直感的な見取り図を提供します。

**Category:** 医工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ct-effective-dose.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ct-effective-dose.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ct-effective-dose.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ct-effective-dose
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
