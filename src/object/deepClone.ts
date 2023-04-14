import isArray from '../is/isArray'
import isDate from '../is/isDate'
import isRegExp from '../is/isRegExp'
import isMap from '../is/isMap'
import isSet from '../is/isSet'
import isWeakMap from '../is/isWeakMap'
import isWeakSet from '../is/isWeakSet'
import isJson from '../is/isJson'

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
function deepClone<
  T extends
    | Record<any, any>
    | any[]
    | Date
    | RegExp
    | Map<any, any>
    | Set<any>
    | number
    | string
    | boolean
    | null
    | undefined
>(obj: T): T {
  if (
    obj == null ||
    isWeakMap(obj) ||
    isWeakSet(obj) ||
    typeof obj !== 'object'
  ) {
    return obj as T
  }

  if (isArray(obj) || isJson(obj)) {
    const newObj = isArray(obj) ? [] : ({} as Record<any, any>)
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepClone((obj as any)[key])
      }
    }
    return newObj as T
  }

  if (isDate(obj)) {
    return new Date(obj as Date) as T
  }

  if (isRegExp(obj)) {
    return new RegExp(obj as RegExp) as T
  }

  if (isMap(obj)) {
    return new Map(
      Array.from(obj as Map<any, any>, ([key, val]) => [key, deepClone(val)])
    ) as T
  }

  if (isSet(obj)) {
    return new Set(Array.from(obj as Set<any>, (val) => deepClone(val))) as T
  }

  return obj
}

export default deepClone
