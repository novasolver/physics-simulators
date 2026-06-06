# RSA 暗号シミュレーター — 鍵生成と暗号化・復号

2 つの素数 p, q から鍵対 (n, e, d) を作り、平文 m を暗号化・復号する RSA の概念デモ。教育用の小さな数で、公開鍵暗号の仕組みを手で追えるレベルで体験できます。

**Category:** 暗号・教育デモ

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rsa-encryption.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rsa-encryption.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rsa-encryption.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rsa-encryption
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
