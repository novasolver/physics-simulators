# Y-Δ（スター-デルタ）回路変換シミュレーター

3つの抵抗をY（星形）⇔Δ（三角形）相互変換できるオンライン計算機。R_A, R_B, R_C を入力するとケネリー変換式に基づき変換後抵抗・合計抵抗・テスト電圧での電力をリアルタイム表示。三相回路やブリッジ回路の解析に最適な無料ツールです。

**Category:** 電気回路

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wye-delta-transform.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wye-delta-transform.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wye-delta-transform.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wye-delta-transform
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
