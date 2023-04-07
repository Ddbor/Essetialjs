import { getTypeTag } from '../tool'

/**
 * 判断是否是 Symbol 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 */
function isSymbol(value: any) {
  return typeof value === 'symbol' || getTypeTag(value) === '[object Symbol]'
}

export default isSymbol