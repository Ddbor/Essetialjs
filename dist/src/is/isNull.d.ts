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
declare function isNull(value: any): boolean;
export default isNull;
