---
nav: API
group:
  order: 0
order: 0
---

# 数据类型

## isArray

判断是否为数组

```javascript
isArray([1, 2, 3]) // => true

isArray('123') // => false

isArray(123) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值说明                                     | 类型      |
| ---------------------------------------------- | --------- |
| 如果 value 是一个数组返回 true，否则返回 false | `boolean` |
