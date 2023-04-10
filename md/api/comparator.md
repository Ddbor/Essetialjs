---
nav: API
group:
  order: 2
order: 2
---

# 比较

## defaultCompareFunction

比较函数，用于比较数字和字符串

```javascript
defaultCompareFunction(1, 1) // 0

defaultCompareFunction(1, 2) // -1

defaultCompareFunction(2, 1) // 1

defaultCompareFunction('a', 'a') // 0

defaultCompareFunction('a', 'b') // -1

defaultCompareFunction('b', 'a') // 1
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| a | 要比较的值 | `number \| string` | -      |
| b | 要比较的值 | `number \| string` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`number`值 | 返回 -1 表示 a < b；返回 0 表示 a = b；返回 1 表示 a > b | `number` |

## equal

比较两个值是否相等

```javascript
equal(1, 1) // true

equal(1, 2) // false

equal(2, 1) // false

equal('a', 'a') // true

equal('a', 'b') // false

equal('b', 'a') // false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| a | 要比较的值 | `number \| string` | -      |
| b | 要比较的值 | `number \| string` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果相等返回 true，否则返回 false | `boolean` |

## greaterThan

比较 a 是否大于 b

```javascript
greaterThan(1, 1) // false

greaterThan(1, 2) // false

greaterThan(2, 1) // true

greaterThan('a', 'a') // false

greaterThan('a', 'b') // false

greaterThan('b', 'a') // true
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| a | 要比较的值 | `number \| string` | -      |
| b | 要比较的值 | `number \| string` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果大于返回 true，否则返回 false | `boolean` |

## greaterThanOrEqual

比较 a 是否大于等于 b

```javascript
greaterThanOrEqual(1, 1) // true

greaterThanOrEqual(1, 2) // false

greaterThanOrEqual(2, 1) // true

greaterThanOrEqual('a', 'a') // true

greaterThanOrEqual('a', 'b') // false

greaterThanOrEqual('b', 'a') // true
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| a | 要比较的值 | `number \| string` | -      |
| b | 要比较的值 | `number \| string` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果大于等于返回 true，否则返回 false | `boolean` |

## lessThan

比较 a 是否小于 b

```javascript
lessThan(1, 1) // false

lessThan(1, 2) // true

lessThan(2, 1) // false

lessThan('a', 'a') // false

lessThan('a', 'b') // true

lessThan('b', 'a') // false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| a | 要比较的值 | `number \| string` | -      |
| b | 要比较的值 | `number \| string` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果小于返回 true，否则返回 false | `boolean` |

## lessThanOrEqual

比较 a 是否小于等于 b

```javascript
lessThanOrEqual(1, 1) // true

lessThanOrEqual(1, 2) // true

lessThanOrEqual(2, 1) // false

lessThanOrEqual('a', 'a') // true

lessThanOrEqual('a', 'b') // true

lessThanOrEqual('b', 'a') // false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| a | 要比较的值 | `number \| string` | -      |
| b | 要比较的值 | `number \| string` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果小于等于返回 true，否则返回 false | `boolean` |