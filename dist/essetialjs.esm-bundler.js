var toString = Object.prototype.toString;
/**
 * 获取类型标签
 * @param value 要检查的值
 * @returns 返回类型标签
 */
function getTypeTag(value) {
    return value == null
        ? value === undefined
            ? '[object Undefined]'
            : '[object Null]'
        : toString.call(value);
}

/**
 * 判断是否为字符串
 * @param value 要检查的值
 * @returns 返回布尔值
 * @example
 * isString('abc') // => true
 * isString(new String('abc')) // => true
 * isString(1) // => false
 * isString(true) // => false
 * isString(null) // => false
 */
function isString(value) {
    return typeof value === 'string' || getTypeTag(value) === '[object String]';
}

/**
 * 判断是否为数组
 * @param value 要检查的值
 * @returns  返回布尔值
 * @example
 * isArray([1, 2, 3]) => true
 * isArray('123') => false
 * isArray(123) => false
 * isArray({}) => false
 * isArray(null) => false
 * isArray(undefined) => false
 * isArray(() => {}) => false
 * isArray(new Set()) => false
 * isArray(new Map()) => false
 */
function isArray(value) {
    return Array.isArray(value);
}

var replacePattern = /^\[|\]$/g;
var replacePattern2 = /\.\[|\]\.|\[|\]/g;
var pattern = /[^\.]+(\.{2,}[^\.]+)*|[^\.]+/g;
/**
 * 将路径转换为数组
 * @param path 路径
 * @returns 返回转换后的数组
 * @example
 * parsePathToArray('a.b.c') // => ['a', 'b', 'c']
 * parsePathToArray('[0]a.b.c[1]') // => ['0', 'a', 'b', 'c', '1']
 * parsePathToArray(['a', 'b', 'c']) // => ['a', 'b', 'c']
 * parsePathToArray('a[0].b[1].c') // => ['a', '0', 'b', '1', 'c']
 * parsePathToArray('a[0].b[1].c') // => ['a', '0', 'b', '1', 'c']
 * parsePathToArray(Symbol('symbolKey')) // => [Symbol]
 * parsePathToArray(true) // => [true]
 * parsePathToArray(false) // => [false]
 * parsePathToArray('') // => ['']
 * parsePathToArray(' ') // => [' ']
 *
 */
function parsePathToArray(path) {
    return isArray(path)
        ? path
        : isString(path)
            ? path
                .replace(replacePattern, '')
                .replace(replacePattern2, '.')
                .match(pattern) || ['']
            : [path];
}

/**
 * 判断是否为布尔值
 * @param value 要检查的值
 * @returns 返回布尔值
 * @example
 * isBoolean(true) // => true
 * isBoolean(false) // => true
 * isBoolean(new Boolean(true)) // => true
 * isBoolean(new Boolean(false)) // => true
 * isBoolean(1) // => false
 * isBoolean('true') // => false
 */
function isBoolean(value) {
    return typeof value === 'boolean' || getTypeTag(value) === '[object Boolean]';
}

/**
 * 判断是否为日期
 * @param value 要检查的值
 * @returns  返回布尔值
 * @example
 * isDate(new Date()) // => true
 * isDate('2019-01-01') // => false
 */
function isDate(value) {
    return getTypeTag(value) === '[object Date]';
}

/**
 * 判断是否为数字
 * @param value 要检查的值
 * @returns  返回布尔值
 * @example
 * isNumber(1) // => true
 * isNumber(1.1) // => true
 * isNumber(NaN) // => true
 * isNumber(Infinity) // => true
 * isNumber(-Infinity) // => true
 * isNumber('1') // => false
 * isNumber(true) // => false
 */
function isNumber(value) {
    return typeof value === 'number' || getTypeTag(value) === '[object Number]';
}

/**
 * 判断是否为函数
 * @param value 要检查的值
 * @returns 返回布尔值
 * @example
 * isFunction(() => {}) // => true
 * isFunction(function() {}) // => true
 * isFunction(class {}) // => true
 * isFunction(new Function()) // => true
 * isFunction(new Date()) // => false
 *
 */
function isFunction(value) {
    return typeof value === 'function';
}

/**
 * 判断是否为 Map 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isMap(new Map()) // => true
 * isMap(new WeakMap()) // => false
 * isMap(new Set()) // => false
 * isMap(new WeakSet()) // => false
 */
function isMap(value) {
    return getTypeTag(value) === '[object Map]';
}

/**
 * 判断是否为null
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isNull(null) // => true
 * isNull(undefined) // => false
 * isNull(0) // => false
 * isNull('') // => false
 * isNull(false) // => false
 * isNull(NaN) // => false
 */
function isNull(value) {
    return value === null;
}

/**
 * 判断是否是对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isObject({}) // => true
 * isObject([]) // => false
 * isObject(null) // => false
 * isObject(undefined) // => false
 * isObject(new Date()) // => false
 * isObject(() => {}) // => false
 * isObject(new Map()) // => false
 * isObject(new Set()) // => false
 * isObject(new WeakMap()) // => false
 * isObject(new WeakSet()) // => false
 */
function isObject(value) {
    return getTypeTag(value) === '[object Object]' && value.constructor === Object;
}

/**
 * 判断是否是 Set 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isSet(new Set()) // => true
 * isSet(new WeakSet()) // => false
 * isSet(new Map()) // => false
 * isSet(new WeakMap()) // => false
 */
function isSet(value) {
    return getTypeTag(value) === '[object Set]';
}

/**
 * 判断是否是 Symbol 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isSymbol(Symbol('abc')) // => true
 * isSymbol(new Symbol('abc')) // => false
 * isSymbol('abc') // => false
 * isSymbol(1) // => false
 */
function isSymbol(value) {
    return typeof value === 'symbol' || getTypeTag(value) === '[object Symbol]';
}

/**
 * 判断是否为undefined
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isUndefined(undefined) // => true
 * isUndefined(null) // => false
 */
function isUndefined(value) {
    return value === undefined;
}

/**
 * 判断是否是 WeakMap 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isWeakMap(new WeakMap()) // => true
 * isWeakMap(new Map()) // => false
 */
function isWeakMap(value) {
    return getTypeTag(value) === '[object WeakMap]';
}

/**
 * 判断是否是 WeakSet 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isWeakSet(new WeakSet()) // => true
 * isWeakSet(new Set()) // => false
 */
function isWeakSet(value) {
    return getTypeTag(value) === '[object WeakSet]';
}

/**
 * 判断是否是正则表达式
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isRegExp(/abc/) // => true
 * isRegExp(new RegExp('abc')) // => true
 * isRegExp(new Date()) // => false
 * isRegExp('abc') // => false
 */
function isRegExp(value) {
    return getTypeTag(value) === '[object RegExp]';
}

/**
 * 根据路径获取对象的属性值
 * @param obj 要查询的对象
 * @param path 获取属性的路径
 * @param defaultValue 为 `undefined` 时返回的值
 * @returns 返回解析值
 * @example
 * getValueByPath({ a: { b: 1 } }, 'a.b') // => 1
 * getValueByPath({ a: { b: 1 } }, ['a', 'b']) // => 1
 * getValueByPath({ a: { b: 1 } }, 'a.c', 2) // => 2
 * getValueByPath({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c') // => 3
 */
function getValueByPath(obj, path, defaultValue) {
    if (obj == null) {
        return undefined;
    }
    path = parsePathToArray(path);
    var length = path.length;
    var index = 0;
    while (obj != null && index < length) {
        obj = obj[path[index++]];
    }
    return index !== length || isUndefined(obj) ? defaultValue : obj;
}

/**
 * 深拷贝
 *
 * 支持Array、Object、Date、RegExp、Map、Set、Number、String、Boolean、null、undefined
 *
 * @param obj 要拷贝的对象
 * @returns 拷贝后的对象
 * @example
 * const obj = {
 *  a: 1,
 *  b: { c: [1, 2, 3], d: { e: 4 } },
 *  g: new Date()
 * }
 * const clonedObj = deepClone(obj)
 */
function deepClone(obj) {
    if (obj == null ||
        isWeakMap(obj) ||
        isWeakSet(obj) ||
        typeof obj !== 'object') {
        return obj;
    }
    if (isArray(obj) || isObject(obj)) {
        var newObj = isArray(obj) ? [] : {};
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                newObj[key] = deepClone(obj[key]);
            }
        }
        return newObj;
    }
    if (isDate(obj)) {
        return new Date(obj);
    }
    if (isRegExp(obj)) {
        return new RegExp(obj);
    }
    if (isMap(obj)) {
        return new Map(Array.from(obj, function (_a) {
            var key = _a[0], val = _a[1];
            return [key, deepClone(val)];
        }));
    }
    if (isSet(obj)) {
        return new Set(Array.from(obj, function (val) { return deepClone(val); }));
    }
    return obj;
}

/**
 * 对嵌套数组或对象的集合进行排序，按升序排序
 * @param arr 要排序的数组
 * @param pathOrGetter 用于获取数组元素的路径或函数
 * @returns 返回排序后的数组，不会改变原数组
 * @example
 
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

  sortByAsc(testArr, 'id') // => res

  sortByAsc(testArr, 'info.name[0]') // => res

  sortByAsc(testArr, (item) => item.id) // => res

  sortByAsc(testArr, ['info', 'name', 0]) // => res

 */
function sortByAsc(arr, pathOrGetter) {
    if (!isArray(arr) || arr.length <= 1) {
        return arr;
    }
    if (!isFunction(pathOrGetter)) {
        var pathArr_1 = parsePathToArray(pathOrGetter);
        pathOrGetter = function (item) { return getValueByPath(item, pathArr_1); };
    }
    return [].concat(arr).sort(function (a, b) {
        var valueA = pathOrGetter(a);
        var valueB = pathOrGetter(b);
        if (valueA == null) {
            return 1;
        }
        if (valueB == null) {
            return -1;
        }
        if (valueA < valueB) {
            return -1;
        }
        if (valueA > valueB) {
            return 1;
        }
        return 0;
    });
}

/**
 * 对嵌套数组或对象的集合进行排序，按倒序排序
 * @param arr 要排序的数组
 * @param pathOrGetter 用于获取数组元素的路径或函数
 * @returns 返回排序后的数组，不会改变原数组
 * @example

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

  sortByDesc(testArr, ['info', 'name', 0]) // => res

 */
function sortByDesc(arr, pathOrGetter) {
    if (!isArray(arr) || arr.length <= 1) {
        return arr;
    }
    if (!isFunction(pathOrGetter)) {
        var pathArr_1 = parsePathToArray(pathOrGetter);
        pathOrGetter = function (item) { return getValueByPath(item, pathArr_1); };
    }
    return [].concat(arr).sort(function (a, b) {
        var valueA = pathOrGetter(a);
        var valueB = pathOrGetter(b);
        if (valueA == null) {
            return 1;
        }
        if (valueB == null) {
            return -1;
        }
        if (valueA < valueB) {
            return 1;
        }
        if (valueA > valueB) {
            return -1;
        }
        return 0;
    });
}

/**
 * 计算笛卡尔积
 * @param arr 二维数组
 * @returns 笛卡尔积
 * @example
 * cartesianProduct([[1, 2], [3, 4]]) // [[1, 3], [1, 4], [2, 3], [2, 4]]
 * cartesianProduct([['a', 'b'], [1, 2], [true, false]]) // [['a', 1, true], ['a', 1, false], ['a', 2, true], ['a', 2, false], ['b', 1, true], ['b', 1, false], ['b', 2, true], ['b', 2, false]]
 */
function cartesianProduct(arr) {
    if (!isArray(arr)) {
        throw new TypeError('Expected an array');
    }
    if (arr.some(function (item) { return !isArray(item); })) {
        throw new TypeError('Each item in the array should be an array');
    }
    var result = [];
    var n = arr.length;
    // 指向每个数组中当前元素的指针
    var pointers = new Array(n).fill(0);
    while (true) {
        // 生成一个元组
        var tuple = new Array(n);
        // 将每个数组中的当前元素放入元组中
        for (var i = 0; i < n; i++) {
            tuple[i] = arr[i][pointers[i]];
        }
        // 将元组放入结果中
        result.push(tuple);
        var k = n - 1;
        // 如果指针已经指向了数组的最后一个元素，则将指针指向数组的第一个元素
        // 并将指针向前移动一位
        // 如果所有的指针都已经指向了数组的最后一个元素，则跳出循环
        while (k >= 0 && pointers[k] === arr[k].length - 1) {
            pointers[k] = 0;
            k--;
        }
        if (k < 0) {
            break;
        }
        // 将指针指向的数组的下一个元素
        pointers[k]++;
    }
    return result;
}

/**
 * 将数组分割成多个 size 长度的区块，并将这些区块组成一个新数组。如果数组无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param array 要处理的数组
 * @param size  每个区块的长度
 * @returns 返回一个包含分割区块的新数组
 * @example
 * chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0) // => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
 * chunk([1, 2, 3], 1) // => [[1], [2], [3]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2) // => [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
 */
function chunk(array, size) {
    var length = !isArray(array) ? 0 : array.length;
    if (!length || size < 1) {
        return [array];
    }
    var index = 0;
    var resIndex = 0;
    var result = new Array(Math.ceil(length / size));
    while (index < length) {
        result[resIndex++] = array.slice(index, (index += size));
    }
    return result;
}

/**
 * 默认的比较函数，用于比较数字和字符串
 * 返回 -1 表示 a < b
 * 返回 0 表示 a = b
 * 返回 1 表示 a > b
 * @param a
 * @param b
 * @returns
 * @example
 * defaultCompareFunction(1, 1) // 0
 * defaultCompareFunction(1, 2) // -1
 * defaultCompareFunction(2, 1) // 1
 * defaultCompareFunction('a', 'a') // 0
 * defaultCompareFunction('a', 'b') // -1
 * defaultCompareFunction('b', 'a') // 1
 */
function defaultCompareFunction(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
}

/**
 * 比较两个值是否相等
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * equal(1, 1) // true
 * equal(1, 2) // false
 * equal(2, 1) // false
 * equal('a', 'a') // true
 * equal('a', 'b') // false
 * equal('b', 'a') // false
 */
function equal(a, b) {
    return defaultCompareFunction(a, b) === 0;
}

/**
 * 比较 a 是否小于 b
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * lessThan(1, 1) // false
 * lessThan(1, 2) // true
 * lessThan(2, 1) // false
 * lessThan('a', 'a') // false
 * lessThan('a', 'b') // true
 * lessThan('b', 'a') // false
 */
function lessThan(a, b) {
    return defaultCompareFunction(a, b) < 0;
}

/**
 * 比较 a 是否大于 b
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * greaterThan(1, 1) // false
 * greaterThan(1, 2) // false
 * greaterThan(2, 1) // true
 * greaterThan('a', 'a') // false
 * greaterThan('a', 'b') // false
 * greaterThan('b', 'a') // true
 */
function greaterThan(a, b) {
    return defaultCompareFunction(a, b) > 0;
}

/**
 * 比较 a 是否小于等于 b
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * lessThanOrEqual(1, 1) // true
 * lessThanOrEqual(1, 2) // true
 * lessThanOrEqual(2, 1) // false
 * lessThanOrEqual('a', 'a') // true
 * lessThanOrEqual('a', 'b') // true
 * lessThanOrEqual('b', 'a') // false
 */
function lessThanOrEqual(a, b) {
    return lessThan(a, b) || equal(a, b);
}

/**
 * 比较 a 是否大于等于 b
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * greaterThanOrEqual(1, 1) // true
 * greaterThanOrEqual(1, 2) // false
 * greaterThanOrEqual(2, 1) // true
 * greaterThanOrEqual('a', 'a') // true
 * greaterThanOrEqual('a', 'b') // false
 * greaterThanOrEqual('b', 'a') // true
 */
function greaterThanOrEqual(a, b) {
    return greaterThan(a, b) || equal(a, b);
}

/**
 * 生成一个min-max之间的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 返回一个min-max之间的随机数
 * @example
 * random(1, 5)
 * // => 3
 */
function random(min, max) {
    // Math.random包含0，不包含1，所以要加1
    // 先生成一个0-1的随机数，再乘以max-min+1，再加上min，就是一个min-max的随机数
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 从数组中随机取出指定个数的元素
 * @param array 数组
 * @param size 取出的元素个数，如果size大于数组长度，返回原数组，如果size小于等于0，返回空数组
 * @returns 返回一个新数组
 * @example
 * randomInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
 * // => [ 5, 10, 9, 8, 7 ]
 *
 * randomInArray([1, 2, 3], 4)
 * // => [1, 2, 3]
 *
 * randomInArray([1, 2, 3], 0)
 * // => []
 */
function randomInArray(array, size) {
    var _a;
    if (size === void 0) { size = 1; }
    // 如果size小于等于0，返回空数组
    if (size <= 0)
        return [];
    // 如果size大于数组长度，返回原数组
    if (size >= array.length)
        return array;
    var result = [];
    // 克隆数组，避免影响原数组
    var clone = array.slice(0);
    for (var i = 0; i < size; i++) {
        var randomIndex = random(0, clone.length - 1);
        result.push(clone[randomIndex]);
        // 交换位置，将已经取出的元素放到数组末尾，然后再将数组长度减一
        // 不会影响随机性
        // 不用splice，因为splice会对数组进行重排，会影响性能
        if (randomIndex !== clone.length - 1) {
            _a = [
                clone[clone.length - 1],
                clone[randomIndex]
            ], clone[randomIndex] = _a[0], clone[clone.length - 1] = _a[1];
        }
        clone.length--;
    }
    return result;
}

export { cartesianProduct, chunk, deepClone, defaultCompareFunction, equal, getValueByPath, greaterThan, greaterThanOrEqual, isArray, isBoolean, isDate, isFunction, isMap, isNull, isNumber, isObject, isRegExp, isSet, isString, isSymbol, isUndefined, isWeakMap, isWeakSet, lessThan, lessThanOrEqual, random, randomInArray, sortByAsc, sortByDesc };
