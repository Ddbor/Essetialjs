import { getTypeTag } from '../utils'

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
function isNumber<T>(value: T): boolean {
  return typeof value === 'number' || getTypeTag(value) === '[object Number]'
}

export default isNumber
