# 共役梁法シミュレーター

単純支持梁のたわみとたわみ角を、共役梁法（モールの定理）で求めるツールです。実梁の M/EI 図を仮想の共役梁に分布荷重として載せ、そのせん断力をたわみ角、曲げモーメントをたわみとして読み取ります。スパン・剛性・荷重を変えると結果がリアルタイムで更新されます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/conjugate-beam-method.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/conjugate-beam-method.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/conjugate-beam-method.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/conjugate-beam-method
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
