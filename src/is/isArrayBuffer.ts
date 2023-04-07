import { getTypeTag } from '../tool'

/**
 * 判断是否为 ArrayBuffer
 * @param value 要检查的值
 * @returns  返回布尔值
 */
function isArrayBuffer(value: any) {
  return getTypeTag(value) === '[object ArrayBuffer]'
}

export default isArrayBuffer
