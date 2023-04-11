---
nav: API
group:
  order: 1
order: 1
---

# 对象

## deepClone

深拷贝，支持Array、Object、Date、RegExp、Map、Set、Number、String、Boolean、null、undefined

```javascript
const obj = {
  a: 1,
  b: { c: [1, 2, 3], d: { e: 4 } },
  g: new Date()
}
const clonedObj = deepClone(obj)
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| obj | 要拷贝的对象 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 返回拷贝的对象 | 拷贝后的对象 | `any` |

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