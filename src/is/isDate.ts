import { getTypeTag } from '../tool'

/**
 * 判断是否为日期
 * @param value 要检查的值
 * @returns  返回布尔值
 * @example
 * isDate(new Date()) // => true
 * isDate('2019-01-01') // => false
 */
function isDate(value: any) {
  return getTypeTag(value) === '[object Date]'
}

export default isDate
