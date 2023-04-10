---
nav: API
group:
  order: 0
order: 0
---

# 数组

## sortByAsc

对嵌套数组或对象的集合进行排序，按升序排序，不会改变原数组

```javascript
 const res = [
  { id: 1, info: { name: ['a'] } },
  { id: 2, info: { name: ['b'] } },
  { id: 3, info: { name: ['c'] } },
  { id: 4, info: { name: ['d'] } }
]

const testArr = [
  { id: 2, info: { name: ['b'] } },
  { id: 3, info: { name: ['c'] } },
  { id: 1, info: { name: ['a'] } },
  { id: 4, info: { name: ['d'] } }
]

sortByDesc(testArr, 'id') // => res

sortByDesc(testArr, 'info.name[0]') // => res

sortByDesc(testArr, (item) => item.id) // => res
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| arr | 要排序的数组 | `any[]` | -      |
| pathOrGetter | 用于获取数组元素的路径或函数 | `string \| any[] \| ((item: any) => any)` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个数组 | 排序后的数组 | `any[]` |

## sortByDesc

对嵌套数组或对象的集合进行排序，按倒序排序，不会改变原数组

```javascript
const res = [
  { id: 4, info: { name: ['d'] } },
  { id: 3, info: { name: ['c'] } },
  { id: 2, info: { name: ['b'] } },
  { id: 1, info: { name: ['a'] } }
]

const testArr = [
  { id: 2, info: { name: ['b'] } },
  { id: 3, info: { name: ['c'] } },
  { id: 1, info: { name: ['a'] } },
  { id: 4, info: { name: ['d'] } }
]

sortByDesc(testArr, 'id') // => res

sortByDesc(testArr, 'info.name[0]') // => res

sortByDesc(testArr, (item) => item.id) // => res
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| arr | 要排序的数组 | `any[]` | -      |
| pathOrGetter | 用于获取数组元素的路径或函数 | `string \| any[] \| ((item: any) => any)` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个数组 | 排序后的数组 | `any[]` |
