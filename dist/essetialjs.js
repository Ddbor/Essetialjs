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
     */
    function isString(value) {
        return typeof value === 'string' || getTypeTag(value) === '[object String]';
    }

    /**
     * 判断是否为数组
     * @param value 要检查的值
     * @returns  返回布尔值
     */
    function isArray(value) {
        return Array.isArray(value);
    }

    /**
     * 判断是否为布尔值
     * @param value 要检查的值
     * @returns 返回布尔值
     */
    function isBoolean(value) {
        return typeof value === 'boolean' || getTypeTag(value) === '[object Boolean]';
    }

    /**
     * 判断是否为日期
     * @param value 要检查的值
     * @returns  返回布尔值
     */
    function isDate(value) {
        return getTypeTag(value) === '[object Date]';
    }

    /**
     * 判断是否为数字
     * @param value 要检查的值
     * @returns  返回布尔值
     */
    function isNumber(value) {
        return typeof value === 'number' || getTypeTag(value) === '[object Number]';
    }

    /**
     * 判断是否为函数
     * @param value 要检查的值
     * @returns 返回布尔值
     */
    function isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * 判断是否为 Map 对象
     * @param value 要判断的值
     * @returns 返回一个布尔值
     */
    function isMap(value) {
        return getTypeTag(value) === '[object Map]';
    }

    /**
     * 判断是否为null
     * @param value 要判断的值
     * @returns 返回一个布尔值
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
     */
    function isSet(value) {
        return getTypeTag(value) === '[object Set]';
    }

    /**
     * 判断是否是 Symbol 对象
     * @param value 要判断的值
     * @returns 返回一个布尔值
     */
    function isSymbol(value) {
        return typeof value === 'symbol' || getTypeTag(value) === '[object Symbol]';
    }

    /**
     * 判断是否为undefined
     * @param value 要判断的值
     * @returns 返回一个布尔值
     */
    function isUndefined(value) {
        return value === undefined;
    }

    /**
     * 判断是否是 WeakMap 对象
     * @param value 要判断的值
     * @returns 返回一个布尔值
     */
    function isWeakMap(value) {
        return getTypeTag(value) === '[object WeakMap]';
    }

    /**
     * 判断是否是 WeakSet 对象
     * @param value 要判断的值
     * @returns 返回一个布尔值
     */
    function isWeakSet(value) {
        return getTypeTag(value) === '[object WeakSet]';
    }

    /**
     * 判断是否是正则表达式
     * @param value 要判断的值
     * @returns 返回一个布尔值
     */
    function isRegExp(value) {
        return getTypeTag(value) === '[object RegExp]';
    }

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

}));
