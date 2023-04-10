/**
 * 对嵌套数组或对象的集合进行排序，按升序排序
 * @param arr 要排序的数组
 * @param pathOrGetter 用于获取数组元素的路径或函数
 * @returns 返回排序后的数组，不会改变原数组
 * @example
 
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

  sortByDesc(testArr, 'id') // => res

  sortByDesc(testArr, 'info.name[0]') // => res

  sortByDesc(testArr, (item) => item.id) // => res

 */
declare function sortByAsc(arr: any[], pathOrGetter: any | ((item: any) => any)): any[];
export default sortByAsc;
