# 逆応答シミュレーター — 右半平面零点（RHP zero）のステップ応答

RHP零点を含むプロセスはステップ入力に対し、最初に目標と反対方向へ動く「逆応答」を示します。プロセスゲインや零点時定数を変えて、その挙動とPI制御の振る舞いを学べます。

**Category:** 制御工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/inverse-response.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/inverse-response.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/inverse-response.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/inverse-response
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
