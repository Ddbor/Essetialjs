# JavaScript 工具库

[![npm](https://img.shields.io/badge/npm-essetialjs-brightgreen)](https://www.npmjs.com/package/essetialjs)
[![npm version](https://img.shields.io/npm/v/essetialjs)](https://www.npmjs.com/package/essetialjs)
[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi)

## 文档

[文档地址](https://ddbor.github.io/Essetialjs/)

[更新日志](https://github.com/Ddbor/Essetialjs/releases)

## 安装

***NPM***

```bash
npm install essetialjs
```

***Yarn***

```bash
yarn add essetialjs
```

***PNPM***

```bash
npm add essetialjs
```

***HTML中引入***

下载 [`essetialjs.min.js`](https://github.com/Ddbor/Essetialjs/tree/main/dist/essetialjs.min.js)

```html
<script src="essetialjs.min.js"></script>
```

## 使用

***import***

```js
import { isString } from 'essetialjs'

isString('abc')
```

***require***

```js
const ESS = require('essetialjs')

ESS.isString('hello world')
```

***Global***

```html
<script src="essetialjs.min.js"></script>
<script>
  ESS.isString('abc')
</script>
```