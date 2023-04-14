/**
 * 判断是否是Object对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isJson({}) // => true
 * isJson([]) // => false
 * isJson(null) // => false
 * isJson(undefined) // => false
 * isJson(new Date()) // => false
 * isJson(() => {}) // => false
 * isJson(new Map()) // => false
 * isJson(new Set()) // => false
 * isJson(new WeakMap()) // => false
 * isJson(new WeakSet()) // => false
 */
declare function isJson<T>(value: T): boolean;
export default isJson;
