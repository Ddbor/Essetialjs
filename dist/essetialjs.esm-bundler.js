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

export { isArray, isBoolean, isDate, isFunction, isMap, isNull, isNumber, isObject, isRegExp, isSet, isString, isSymbol, isUndefined, isWeakMap, isWeakSet };
