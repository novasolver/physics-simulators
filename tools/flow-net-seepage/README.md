# フローネットによる浸透流量シミュレーター

ダムや矢板壁の下を通る浸透流を、流線網（フローネット）で解くツールです。水位差・透水係数・流路数・等ポテンシャル降下数を変えると、地盤を抜ける浸透流量と出口の動水勾配、パイピングに対する安全率がリアルタイムで分かります。

**Category:** 地盤工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/flow-net-seepage.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/flow-net-seepage.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/flow-net-seepage.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/flow-net-seepage
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
