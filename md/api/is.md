---
nav: API
group:
  order: 0
order: 0
---

<!-- 参数及返回值是一样的 -->

# 类型判断

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

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isBoolean

判断是否为布尔值

```javascript
isBoolean(true) // => true

isBoolean(false) // => true

isBoolean(new Boolean(true)) // => true

isBoolean(new Boolean(false)) // => true

isBoolean('true') // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isDate

判断是否为日期

```javascript
isDate(new Date()) // => true

isDate('2019-01-01') // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isFunction

判断是否为函数

```javascript
isFunction(() => {}) // => true

isFunction(function () {}) // => true

isFunction(new Function()) // => true

isFunction('function() {}') // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isMap

判断是否为 Map

```javascript
isMap(new Map()) // => true

isMap(new WeakMap()) // => false

isMap(new Set()) // => false

isMap(new WeakSet()) // => false

isMap(new Object()) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isNull

判断是否为 null

```javascript
isNull(null) // => true

isNull(undefined) // => false

isNull(0) // => false

isNull('') // => false

isNull(false) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isNumber

判断是否为数字

```javascript
isNumber(1) // => true

isNumber(1.1) // => true

isNumber(NaN) // => true

isNumber(Infinity) // => true

isNumber('1') // => false

isNumber(true) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isObject

判断是否为对象

```javascript
isObject({}) // => true

isObject([]) // => false

isObject(null) // => false

isObject(undefined) // => false

isObject(new Date()) // => false

isObject(() => {}) // => false

isObject(new Map()) // => false

isObject(new Set()) // => false

isObject(new WeakMap()) // => false

isObject(new WeakSet()) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isRegExp

判断是否为正则表达式

```javascript
isRegExp(/abc/) // => true

isRegExp(new RegExp('abc')) // => true

isRegExp('abc') // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isSet

判断是否为 Set

```javascript
isSet(new Set()) // => true

isSet(new WeakSet()) // => false

isSet(new Map()) // => false

isSet(new WeakMap()) // => false

isSet(new Object()) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isString

判断是否为字符串

```javascript
isString('') // => true

isString('abc') // => true

isString(new String('abc')) // => true

isString(1) // => false

isString(true) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isSymbol

判断是否为 Symbol

```javascript
isSymbol(Symbol('abc')) // => true

isSymbol(Symbol.iterator) // => true

isSymbol('abc') // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isUndefined

判断是否为 undefined

```javascript
isUndefined(undefined) // => true

isUndefined(null) // => false

isUndefined(0) // => false

isUndefined('') // => false

isUndefined(false) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isWeakMap

判断是否为 WeakMap

```javascript
isWeakMap(new WeakMap()) // => true

isWeakMap(new Map()) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |

## isWeakSet

判断是否为 WeakSet

```javascript
isWeakSet(new WeakSet()) // => true

isWeakSet(new Set()) // => false
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| value | 要检查的值 | `any` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 一个`boolean`值 | 如果 value 是一个数组返回 true，否则返回 false | `boolean` |
