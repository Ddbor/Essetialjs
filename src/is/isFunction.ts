/**
 * 判断是否为函数
 * @param value 要检查的值
 * @returns 返回布尔值
 * @example
 * isFunction(() => {}) // => true
 * isFunction(function() {}) // => true
 * isFunction(class {}) // => true
 * isFunction(new Function()) // => true
 * isFunction(new Date()) // => false
 *
 */
function isFunction<T>(value: T): boolean {
  return typeof value === 'function'
}

export default isFunction
