# 重み初期化シミュレーター — Xavier・He

深いニューラルネットワークで、入力信号が層を順伝播するときに活性化の分散がどう変化するかを可視化します。初期化法を切り替えると、信号が消える（勾配消失）か、発散する（勾配爆発）か、一定に保たれるかが一目で分かります。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/weight-initialization.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/weight-initialization.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/weight-initialization.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/weight-initialization
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
