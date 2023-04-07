import { getTypeTag } from '../tool'

/**
 * 判断是否是对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isObject({}) // => true
 * isObject([]) // => false
 * isObject(null) // => false
 * isObject(undefined) // => false
 * isObject(new Date()) // => false
 * isObject(() => {}) // => false
 * isObject(new Map()) // => false
 * isObject(new Set()) // => false
 * isObject(new WeakMap()) // => false
 * isObject(new WeakSet()) // => false
 */
function isObject(value: any) {
  return getTypeTag(value) === '[object Object]' && value.constructor === Object
}

export default isObject
