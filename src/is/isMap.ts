import { getTypeTag } from '../tool'

/**
 * 判断是否为 Map 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 */
function isMap(value: any) {
  return getTypeTag(value) === '[object Map]'
}

export default isMap
