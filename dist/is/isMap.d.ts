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
declare function isMap(value: any): boolean;
export default isMap;
