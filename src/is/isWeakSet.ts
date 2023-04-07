import { getTypeTag } from '../tool'

/**
 * 判断是否是 WeakSet 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 */
function isWeakSet(value: any) {
  return getTypeTag(value) === '[object WeakSet]'
}

export default isWeakSet
