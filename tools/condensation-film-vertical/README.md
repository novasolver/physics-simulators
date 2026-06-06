# 垂直平板の膜状凝縮シミュレーター

冷たい垂直壁に飽和蒸気が凝縮し、薄い液膜となって重力で流れ落ちる「膜状凝縮」をNusselt理論で解くツールです。流体・飽和温度・壁面温度・平板の高さを変えると、平均熱伝達率・膜厚・熱流束・凝縮量がリアルタイムで分かります。

**Category:** 熱工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/condensation-film-vertical.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/condensation-film-vertical.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/condensation-film-vertical.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/condensation-film-vertical
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
