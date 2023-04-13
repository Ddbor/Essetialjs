import { getTypeTag } from '../utils'

/**
 * 判断是否是 Set 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isSet(new Set()) // => true
 * isSet(new WeakSet()) // => false
 * isSet(new Map()) // => false
 * isSet(new WeakMap()) // => false
 */
function isSet<T>(value: T): boolean {
  return getTypeTag(value) === '[object Set]'
}

export default isSet
