# マルコフ連鎖 シミュレーター — 2 状態の定常分布と混合時間

遷移確率 p, q を持つ 2 状態マルコフ連鎖の定常分布 π、t ステップ後の状態確率 P_1(t)、99% 混合時間 t_mix をリアルタイムに計算します。Perron-Frobenius の定理と固有値による指数収束を直感的に理解できます。

**Category:** 確率過程シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/markov-chain.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/markov-chain.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/markov-chain.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/markov-chain
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
