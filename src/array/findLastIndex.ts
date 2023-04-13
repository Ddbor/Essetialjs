/**
 * 查找数组中符合条件的最后一个元素的索引
 * @param arr 要查找的数组
 * @param callback 回调函数，返回true时表示找到了符合条件的元素
 * @returns 返回符合条件的元素的索引，如果没有找到则返回-1
 * @example
 * findLastIndex([1, 2, 3, 4], (item) => item === 3) // 2
 *
 * findLastIndex([1, 2, 3, 4], (item) => item === 5) // -1
 */
function findLastIndex<T>(arr: T[], callback: (item: T) => boolean) {
  let index = -1
  let i = arr.length - 1
  while (i >= 0) {
    if (callback(arr[i])) {
      index = i
      break
    }
    i--
  }
  return index
}

export default findLastIndex
