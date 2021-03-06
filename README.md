# Earthquake Map

![GitHub package.json version](https://img.shields.io/github/package-json/v/earthquake-alert/earthquake-map?style=flat-square)

<p style="text-align: center">
  <img src="assets/title.png">
</p>

## TL;DR

震度分布図の描画

- ミニマップあり
- 海外地震に対応
- HTMLに記述することでさまざまな情報を追加可能
- Seleniumでキャプチャすればかんたんに画像化可能

## 描画できるもの

地震・津波に関する地図の描画。

- 震度分布図（震度観測点）
  - 用途: 震源・震度に関する情報
- 震度分布図（細分区域のタイル）
  - 震度速報
- ~~震度分布図（都道府県のタイル）~~（**追加予定**）
  - 緊急地震速報等
- ~~津波警報・注意報図~~（**追加予定**）
  - 津波注意報
  - 津波警報
  - 大津波警報

## Run

```bash
# need docker installed

# run server
docker-compose up -d

# connect to http://localhost:8080/
```

## パラメータの説明

[パラメータの説明](./assets/parameters.md)

## 各震度の色

| 震度  |                                    色                                     |
| :---: | :-----------------------------------------------------------------------: |
|   1   | ![#54cfe8](https://via.placeholder.com/15/54cfe8/000000?text=+) `#54cfe8` |
|   2   | ![#64e375](https://via.placeholder.com/15/64e375/000000?text=+) `#64e375` |
|   3   | ![#f0ed4d](https://via.placeholder.com/15/f0ed4d/000000?text=+) `#f0ed4d` |
|   4   | ![#eb9423](https://via.placeholder.com/15/eb9423/000000?text=+) `#eb9423` |
|  5弱  | ![#f74d4d](https://via.placeholder.com/15/f74d4d/000000?text=+) `#f74d4d` |
|  5強  | ![#f74d4d](https://via.placeholder.com/15/f74d4d/000000?text=+) `#f74d4d` |
|  6弱  | ![#f03eb8](https://via.placeholder.com/15/f03eb8/000000?text=+) `#f03eb8` |
|  6強  | ![#f03eb8](https://via.placeholder.com/15/f03eb8/000000?text=+) `#f03eb8` |
|   7   | ![#b347ed](https://via.placeholder.com/15/b347ed/000000?text=+) `#b347ed` |

## ライセンス

MIT

使用した場合、issueにて報告してくれるとありがたいです。
