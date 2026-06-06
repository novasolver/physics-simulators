# 製造解法 (MMS) コード検証シミュレーター

CFD/FEM コードの離散化が正しく実装されているかを、「製造解法 (Method of Manufactured Solutions)」で検証するツールです。任意の解析解を「製造」してソース項を逆算し、4段階の格子で L2 誤差と観測収束次数を測ります。観測次数が設計次数と一致すれば、コード検証 PASS です。

**Category:** 検証・妥当性確認 (V&amp;V)

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/method-of-manufactured-solutions.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/method-of-manufactured-solutions.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/method-of-manufactured-solutions.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/method-of-manufactured-solutions
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
