/**
 * 判断是否为日期
 * @param value 要检查的值
 * @returns  返回布尔值
 * @example
 * isDate(new Date()) // => true
 * isDate('2019-01-01') // => false
 */
declare function isDate<T>(value: T): boolean;
export default isDate;
