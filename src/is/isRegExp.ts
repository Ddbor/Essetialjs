import { getTypeTag } from '../tool'

/**
 * 判断是否是正则表达式
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isRegExp(/abc/) // => true
 * isRegExp(new RegExp('abc')) // => true
 * isRegExp(new Date()) // => false
 * isRegExp('abc') // => false
 */
function isRegExp(value: any) {
  return getTypeTag(value) === '[object RegExp]'
}

export default isRegExp
