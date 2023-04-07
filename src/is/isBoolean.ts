import { getTypeTag } from '../tool'

/**
 * 判断是否为布尔值
 * @param value 要检查的值
 * @returns 返回布尔值
 */
function isBoolean(value: any) {
  return typeof value === 'boolean' || getTypeTag(value) === '[object Boolean]'
}

export default isBoolean
