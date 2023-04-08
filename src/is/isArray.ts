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
function isArray(value: any): boolean {
  return Array.isArray(value)
}

export default isArray
