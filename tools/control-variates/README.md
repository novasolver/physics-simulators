# 制御変量法シミュレーター

モンテカルロ法の精度をタダで底上げする「制御変量法」を体験するツールです。求めたい量と相関の強い補助変数を使うと、推定値の標準誤差がどれだけ下がるか。相関係数・サンプル数・乱数シードを変えながら、分散が ρ² だけ縮む様子をリアルタイムに確かめられます。

**Category:** 統計・モンテカルロ

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/control-variates.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/control-variates.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/control-variates.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/control-variates
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
