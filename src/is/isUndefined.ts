/**
 * 判断是否为undefined
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isUndefined(undefined) // => true
 * isUndefined(null) // => false
 */
function isUndefined<T>(value: T): boolean {
  return value === undefined
}

export default isUndefined
