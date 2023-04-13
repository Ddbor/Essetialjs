import isArray from '../is/isArray'
import getPathOrGetter from '../utils/getPathOrGetter'

/**
 * 数组去重，只有第一次出现的元素会被保留
 * @param arr
 * @param pathOrGetter 在处理对象数组时，可以指定用于确定唯一性的键，如果不传，则按数组元素的值进行去重，如果传入字符串或数组，则按对象的该键的值进行去重，如果传入函数，则按函数的返回值进行去重
 * @returns 返回去重后的数组，不会改变原数组
 * @example
 *
 * unique([1, 2, 3, 1, 2, 3])
 * // => [1, 2, 3]
 *
 * unique([{ a: 1, b: 'b' }, { a: 1 }, { a: 2 }], 'a')
 * // => [{ a: 1, b: 'b' }, { a: 2 }]
 *
 * unique([{ a: 1 }, { a: 1 }, { a: 2 }], ['a'])
 * // => [{ a: 1 }, { a: 2 }]
 *
 * unique([{ a: 1, b: 'b' }, { a: 1, b: 'b', c: 'c' }, { a: 2 }], (item) => item.a + item.b)
 * // => [{ a: 1, b: 'b' }, { a: 2 }]
 *
 */
function unique(
  arr: any[],
  pathOrGetter: string | any[] | ((item: any) => any) = (
    item: number | string
  ) => item
) {
  if (!isArray(arr) || arr.length <= 1) {
    return arr
  }

  // 存储重复的key
  const duplicateKeys: any = {}

  pathOrGetter = getPathOrGetter(pathOrGetter)

  return arr.filter((item: any) => {
    const key = (pathOrGetter as Function)(item)
    if (!duplicateKeys[key]) {
      duplicateKeys[key] = true
      return true
    }
    return false
  })
}

export default unique
