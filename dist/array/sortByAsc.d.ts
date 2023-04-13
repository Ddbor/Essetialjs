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
declare function sortByAsc(arr: any[], pathOrGetter?: string | any[] | ((item: any) => any)): any[];
export default sortByAsc;
