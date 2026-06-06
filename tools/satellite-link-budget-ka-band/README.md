# Ka 帯衛星通信 リンクバジェット — 雨減衰・Starlink/JCSAT

17.7〜30GHz の Ka 帯衛星リンクは、降雨で大きく減衰する代わりに広い帯域と高利得アンテナで大容量を実現します。軌道（LEO/MEO/GEO）・衛星 EIRP・地上アンテナ口径・気候帯を変えると、自由空間損失とリンクマージンがリアルタイムで動き、Starlink や JCSAT のような実例の振る舞いを直感的に確かめられます。

**Category:** 衛星通信・Ka 帯

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/satellite-link-budget-ka-band.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/satellite-link-budget-ka-band.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/satellite-link-budget-ka-band.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/satellite-link-budget-ka-band
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
