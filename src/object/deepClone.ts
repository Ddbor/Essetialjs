import isArray from '../is/isArray'
import isDate from '../is/isDate'
import isRegExp from '../is/isRegExp'
import isMap from '../is/isMap'
import isSet from '../is/isSet'
import isWeakMap from '../is/isWeakMap'
import isWeakSet from '../is/isWeakSet'
import { isObject } from '../is'

/**
 * 深拷贝
 *
 * 支持Array、Object、Date、RegExp、Map、Set、Number、String、Boolean、null、undefined
 *
 * @param obj 要拷贝的对象
 * @returns 拷贝后的对象
 * @example
 * const obj = {
 *  a: 1,
 *  b: { c: [1, 2, 3], d: { e: 4 } },
 *  g: new Date()
 * }
 * const clonedObj = deepClone(obj)
 */
function deepClone(obj: any): any {
  if (
    obj == null ||
    isWeakMap(obj) ||
    isWeakSet(obj) ||
    typeof obj !== 'object'
  ) {
    return obj
  }

  if (isArray(obj) || isObject(obj)) {
    const newObj: any = isArray(obj) ? [] : {}
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepClone(obj[key])
      }
    }
    return newObj
  }

  if (isDate(obj)) {
    return new Date(obj)
  }

  if (isRegExp(obj)) {
    return new RegExp(obj)
  }

  if (isMap(obj)) {
    return new Map(Array.from(obj, ([key, val]) => [key, deepClone(val)]))
  }

  if (isSet(obj)) {
    return new Set(Array.from(obj, (val) => deepClone(val)))
  }

  return obj
}

export default deepClone
