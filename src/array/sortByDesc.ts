import { isArray, isFunction } from '../is'
import { getValueByPath } from '../object'
import { parsePathToArray } from '../utils'

/**
 * 对嵌套数组或对象的集合进行排序，按倒序排序
 * @param arr 要排序的数组
 * @param pathOrGetter 用于获取数组元素的路径或函数
 * @returns 返回排序后的数组，不会改变原数组
 * @example

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
function sortByDesc(
  arr: any[],
  pathOrGetter: any | ((item: any) => any)
): any[] {
  if (!isArray(arr) || arr.length <= 1) {
    return arr
  }

  if (!isFunction(pathOrGetter)) {
    const pathArr = parsePathToArray(pathOrGetter)
    pathOrGetter = (item: any) => getValueByPath(item, pathArr)
  }

  return ([] as any[]).concat(arr).sort((a, b) => {
    const valueA = pathOrGetter(a)
    const valueB = pathOrGetter(b)

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
