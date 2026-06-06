# メッシュ独立性検証シミュレーター

CFDや有限要素解析で必須の「メッシュ独立性」を、5段階のグリッドで一気に評価するツールです。粗→最微細のメッシュで得た解を入力するだけで、隣接段階の相対変化・独立達成段階・観測収束次数 p・Richardson補外値が瞬時に算出され、V&amp;V（検証と妥当性確認）のエビデンスとして使えます。

**Category:** 検証・妥当性確認 (V&amp;V)

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/mesh-independence-study.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/mesh-independence-study.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/mesh-independence-study.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/mesh-independence-study
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
