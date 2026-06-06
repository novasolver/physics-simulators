# 1次元拡散方程式ソルバー

$\partial u/\partial t = D \cdot \partial^2 u/\partial x^2$ をCrank-Nicolson法で安定に求解。初期条件・境界条件を自由に設定してアニメーションで確認。

**Category:** 数値解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/diffusion-equation-1d.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/diffusion-equation-1d.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/diffusion-equation-1d.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/diffusion-equation-1d
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
