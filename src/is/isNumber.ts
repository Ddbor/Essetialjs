import { getTypeTag } from '../tool'

/**
 * 判断是否为数字
 * @param value 要检查的值
 * @returns  返回布尔值
 */
function isNumber(value: any) {
  return typeof value === 'number' || getTypeTag(value) === '[object Number]'
}

export default isNumber
