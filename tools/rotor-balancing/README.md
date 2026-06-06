# 回転体のバランシング（影響係数法）シミュレーター

ファンや羽根車、砥石などの回転体が振れる原因のほとんどは質量の不釣り合いです。元の振動・試しおもり付きの振動・試しおもりの諸元を入力すると、影響係数法によって付けるべき修正おもりの質量と取付角がベクトル演算で求まります。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rotor-balancing.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rotor-balancing.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rotor-balancing.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rotor-balancing
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
