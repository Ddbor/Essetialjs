import { isArray } from '../is'
import getPathOrGetter from '../utils/getPathOrGetter'

/**
 * 对数组进行排序，按倒序排序
 * @param arr 要排序的数组
 * @param pathOrGetter 用于获取数组元素的路径或函数，如果不传，则按数组元素的值进行排序
 * @returns 返回排序后的数组，不会改变原数组
 * @example

  sortByDesc([2, 3, 1, 4])
  // => [4, 3, 2, 1]

  const res = [
    { id: 4, info: { name: ['d'] } },
    { id: 3, info: { name: ['c'] } },
    { id: 2, info: { name: ['b'] } },
    { id: 1, info: { name: ['a'] } }
  ]

  const testArr = [
    { id: 2, info: { name: ['b'] } },
    { id: 3, info: { name: ['c'] } },
    { id: 1, info: { name: ['a'] } },
    { id: 4, info: { name: ['d'] } }
  ]

  sortByDesc(testArr, 'id') // => res

  sortByDesc(testArr, 'info.name[0]') // => res

  sortByDesc(testArr, (item) => item.id) // => res

  sortByDesc(testArr, ['info', 'name', 0]) // => res

 */
function sortByDesc<T>(
  arr: T[],
  pathOrGetter: string | ((item: T) => any) | string[] = (item: T) => item
): T[] {
  if (!isArray(arr) || arr.length <= 1) {
    return arr
  }

  const getter = getPathOrGetter(pathOrGetter)

  return ([] as T[]).concat(arr).sort((a, b) => {
    const valueA = getter(a)
    const valueB = getter(b)

    if (valueA == null) {
      return 1
    }

    if (valueB == null) {
      return -1
    }

    if (valueA < valueB) {
      return 1
    }

    if (valueA > valueB) {
      return -1
    }

    return 0
  })
}

export default sortByDesc
