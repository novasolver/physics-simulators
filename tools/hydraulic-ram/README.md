# 水撃（ウォーターハンマー）解析シミュレーター

管路長・内径・流速・弁閉鎖時間を調整して Joukowsky 式に基づき最大水撃圧・圧力波速度・臨界閉鎖時間をリアルタイム計算。圧力波形の変化と弁閉鎖時間の安全判定を可視化し、プラント配管の耐圧設計に活用できます。

**Category:** 配管・流体工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hydraulic-ram.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hydraulic-ram.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hydraulic-ram.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hydraulic-ram
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
