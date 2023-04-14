/**
 * 判断是否是对象，包括数组、函数、Map、Set、WeakMap、WeakSet、Date、RegExp、Object、函数
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isObject({}) // => true
 * isObject([]) // => true
 * isObject(() => {}) // => true
 * isObject(new Map()) // => true
 * isObject(new Set()) // => true
 * isObject(new WeakMap()) // => true
 * isObject(new WeakSet()) // => true
 * isObject(new Date()) // => true
 * isObject(new RegExp('')) // => true
 * function fn() {}
 * isObject(fn) // => true
 */
declare function isObject<T>(value: T): boolean;
export default isObject;
