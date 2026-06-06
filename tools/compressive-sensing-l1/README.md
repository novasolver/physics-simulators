# 圧縮センシング L1 再構成 シミュレーター

N 次元の中で非ゼロ要素が K 個しかない「スパース信号」を、Nyquist より遥かに少ない M 観測から L1 最小化で復元する圧縮センシング（Compressive Sensing）を体験するツールです。信号次元・観測数・観測行列・雑音・再構成アルゴリズムを変えると、Candes-Tao の理論条件・RIP・再構成誤差がリアルタイムで分かります。

**Category:** 信号処理・スパース表現

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/compressive-sensing-l1.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/compressive-sensing-l1.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/compressive-sensing-l1.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/compressive-sensing-l1
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
