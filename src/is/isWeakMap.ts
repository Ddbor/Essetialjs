import { getTypeTag } from '../tool'

/**
 * 判断是否是 WeakMap 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isWeakMap(new WeakMap()) // => true
 * isWeakMap(new Map()) // => false
 */
function isWeakMap(value: any) {
  return getTypeTag(value) === '[object WeakMap]'
}

export default isWeakMap
