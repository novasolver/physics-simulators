# フェランチ効果シミュレーター

無負荷・軽負荷の長距離送電線で起こる「フェランチ効果」を可視化するツールです。送電線長・送電端電圧・線路定数を変えると、受電端の電圧上昇率・サージインピーダンス・線路に沿った電圧分布がリアルタイムで分かり、なぜ遠い端のほうが電圧が高くなるのかを直感的に理解できます。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/transmission-line-ferranti.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/transmission-line-ferranti.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/transmission-line-ferranti.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/transmission-line-ferranti
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
