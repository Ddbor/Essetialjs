(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ESS = {}));
})(this, (function (exports) { 'use strict';

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

    exports.defaultCompareFunction = defaultCompareFunction;
    exports.equal = equal;
    exports.getValueByPath = getValueByPath;
    exports.greaterThan = greaterThan;
    exports.greaterThanOrEqual = greaterThanOrEqual;
    exports.isArray = isArray;
    exports.isBoolean = isBoolean;
    exports.isDate = isDate;
    exports.isFunction = isFunction;
    exports.isMap = isMap;
    exports.isNull = isNull;
    exports.isNumber = isNumber;
    exports.isObject = isObject;
    exports.isRegExp = isRegExp;
    exports.isSet = isSet;
    exports.isString = isString;
    exports.isSymbol = isSymbol;
    exports.isUndefined = isUndefined;
    exports.isWeakMap = isWeakMap;
    exports.isWeakSet = isWeakSet;
    exports.lessThan = lessThan;
    exports.lessThanOrEqual = lessThanOrEqual;
    exports.sortByAsc = sortByAsc;
    exports.sortByDesc = sortByDesc;

}));
