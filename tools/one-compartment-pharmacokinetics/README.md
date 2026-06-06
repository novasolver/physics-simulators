# 1コンパートメント薬物動態シミュレーター — 静注ボーラスと経口投与

体内を1つの均一なコンパートメントと仮定する最も基本的な薬物動態（PK）モデルです。投与量・分布容積・消失速度定数・吸収速度定数を変えると、血中濃度の時間プロファイル、半減期、クリアランス、AUC、Cmax/Tmax がリアルタイムで計算され、静注ボーラスと経口投与の違いを直感的に理解できます。

**Category:** 医工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/one-compartment-pharmacokinetics.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/one-compartment-pharmacokinetics.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/one-compartment-pharmacokinetics.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/one-compartment-pharmacokinetics
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
