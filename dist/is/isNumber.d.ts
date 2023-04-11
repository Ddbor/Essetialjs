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
declare function isNumber(value: any): boolean;
export default isNumber;
