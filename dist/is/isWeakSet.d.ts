/**
 * 判断是否是 WeakSet 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isWeakSet(new WeakSet()) // => true
 * isWeakSet(new Set()) // => false
 */
declare function isWeakSet<T>(value: T): boolean;
export default isWeakSet;
