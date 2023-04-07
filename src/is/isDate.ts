import { getTypeTag } from '../tool'

/**
 * 判断是否为日期
 * @param value 要检查的值
 * @returns  返回布尔值
 */
function isDate(value: any) {
  return getTypeTag(value) === '[object Date]'
}

export default isDate
