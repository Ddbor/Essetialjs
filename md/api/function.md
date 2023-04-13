---
nav: API
group:
  order: 5
order: 5
---

# 函数

## executeAfter

创建一个函数，当调用次数大于等于n将触发回调

```javascript
const arr = ['1', '2'];

const fn = executeAfter(function() {
  console.log('done');
}, arr.length)

forEach(arr, function() {
  fn()
})
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| callback | 回调 | `(...args: any) => any` | -      |
| n | 调用次数 | `number` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 返回新函数 | 返回新函数 | `(...args: any) => any` |