# 双一次変換シミュレーター — アナログからデジタルIIRへ

アナログ1次ローパスフィルタ H(s)=ωc/(s+ωc) を、双一次変換でデジタルIIRフィルタに変換するツールです。カットオフ周波数とサンプリング周波数を変えると、IIR係数 b0/b1/a1・周波数応答・周波数ワーピング・プリワープの効果がリアルタイムで分かります。

**Category:** 信号処理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/iir-bilinear-transform.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/iir-bilinear-transform.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/iir-bilinear-transform.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/iir-bilinear-transform
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
