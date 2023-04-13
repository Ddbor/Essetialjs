import { getTypeTag } from '../utils'

/**
 * 判断是否是 WeakMap 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isWeakMap(new WeakMap()) // => true
 * isWeakMap(new Map()) // => false
 */
function isWeakMap<T>(value: T): boolean {
  return getTypeTag(value) === '[object WeakMap]'
}

export default isWeakMap
