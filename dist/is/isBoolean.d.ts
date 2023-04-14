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
declare function isBoolean<T>(value: T): boolean;
export default isBoolean;
