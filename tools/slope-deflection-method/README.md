# たわみ角法シミュレーター

2スパンの不静定連続梁を「たわみ角法（変位法）」で解くツールです。スパン長・曲げ剛性・等分布荷重を変えると、節点の回転角・中間支点モーメント・反力・曲げモーメント図がリアルタイムで求まり、不静定構造の解き方を直感的に理解できます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/slope-deflection-method.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/slope-deflection-method.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/slope-deflection-method.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/slope-deflection-method
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
