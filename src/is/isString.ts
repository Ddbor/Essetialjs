import { getTypeTag } from '../tool'

/**
 * 判断是否为字符串
 * @param value 要检查的值
 * @returns 返回布尔值
 */
function isString(value: any) {
  return typeof value === 'string' || getTypeTag(value) === '[object String]'
}

export default isString
