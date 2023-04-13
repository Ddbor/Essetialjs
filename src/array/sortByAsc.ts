import { isArray } from '../is'
import getPathOrGetter from '../utils/getPathOrGetter'

/**
 * 对数组进行排序，按升序排序
 * @param arr 要排序的数组
 * @param pathOrGetter 用于获取数组元素的路径或函数，如果不传，则按数组元素的值进行排序
 * @returns 返回排序后的数组，不会改变原数组
 * @example
 
  sortByAsc([2, 3, 1, 4])
  // => [1, 2, 3, 4]

  const res = [
    { id: 1, info: { name: ['a'] } },
    { id: 2, info: { name: ['b'] } },
    { id: 3, info: { name: ['c'] } },
    { id: 4, info: { name: ['d'] } }
  ]

  const testArr = [
    { id: 2, info: { name: ['b'] } },
    { id: 3, info: { name: ['c'] } },
    { id: 1, info: { name: ['a'] } },
    { id: 4, info: { name: ['d'] } }
  ]

  sortByAsc(testArr, 'id') // => res

  sortByAsc(testArr, 'info.name[0]') // => res

  sortByAsc(testArr, (item) => item.id) // => res

  sortByAsc(testArr, ['info', 'name', 0]) // => res

 */
function sortByAsc(
  arr: any[],
  pathOrGetter: string | any[] | ((item: any) => any) = (
    item: number | string
  ) => item
): any[] {
  if (!isArray(arr) || arr.length <= 1) {
    return arr
  }

  pathOrGetter = getPathOrGetter(pathOrGetter)

  return ([] as any[]).concat(arr).sort((a, b) => {
    const valueA = (pathOrGetter as Function)(a)
    const valueB = (pathOrGetter as Function)(b)

    if (valueA == null) {
      return 1
    }

    if (valueB == null) {
      return -1
    }

    if (valueA < valueB) {
      return -1
    }

    if (valueA > valueB) {
      return 1
    }

    return 0
  })
}

export default sortByAsc
