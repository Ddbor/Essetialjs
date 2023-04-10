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
isArray([1, 2, 3]) // => true

isArray('123') // => false

isArray(123) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| obj | 要查询的对象 | `any` | -      |
| path | 获取属性的路径 | `string \| any[]` | -      |
| defaultValue | *非必传*，解析的值为 `undefined` 时返回的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 返回解析值 | 解析后的值，为 `undefined` 将返回 `defaultValue` | `any` |