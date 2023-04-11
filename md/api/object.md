---
nav: API
group:
  order: 1
order: 1
---

# 对象

## getValueByPath

根据路径获取对象的属性值

```javascript
getValueByPath({ a: { b: 1 } }, 'a.b') // => 1

getValueByPath({ a: { b: 1 } }, ['a', 'b']) // => 1

getValueByPath({ a: { b: 1 } }, 'a.c', 2) // => 2

getValueByPath({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c') // => 3
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| obj | 要查询的对象 | `any` | -      |
| path | 获取属性的路径 | `string \| any[]` | -      |
| defaultValue | *非必传*，解析的值为 `undefined` 时返回的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 返回解析值 | 解析后的值，为 `undefined` 将返回 `defaultValue` | `any` |