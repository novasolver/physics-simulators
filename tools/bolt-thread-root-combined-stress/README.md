# ボルトねじ谷部の複合応力シミュレーター

トルク法でボルトを締めると、ねじ谷部は軸力による引張応力と、ねじトルクによるねじり応力を同時に受けます。軸力・ねじサイズ・摩擦係数を変えて、合成された相当応力が耐力を超えないかをリアルタイムで確認できます。

**Category:** 機械要素設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bolt-thread-root-combined-stress.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bolt-thread-root-combined-stress.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bolt-thread-root-combined-stress.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bolt-thread-root-combined-stress
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
