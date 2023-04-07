import { getTypeTag } from '../tool'

/**
 * 判断是否为 arguments 对象
 * @param value 要检查的值
 * @returns 返回布尔值
 */
function isArguments(value: any): boolean {
  return getTypeTag(value) === '[object Arguments]'
}

export default isArguments
