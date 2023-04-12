import isArray from '../is/isArray'

/**
 * 数组扁平化
 * @param arr
 * @param depth 指定扁平化的深度，默认为无限深度
 * @returns
 * @example
 * flatten([1, [2, [3, [4]], 5]]) // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, [4]], 5]], 2) // [1, 2, 3, [4], 5]
 */
function flatten(arr: any[], depth = Infinity) {
  const result = []
  // 使用栈来模拟递归，避免爆栈，同时记录当前递归的深度，避免超过指定的深度
  const track = arr.map((item) => ({ data: item, d: 0 }))

  while (track.length) {
    // 从栈中取出最后一个元素
    // pop()方法比unshift()快
    // 因为pop()方法只需要修改数组的length属性，而unshift()方法需要移动数组中的元素
    const { data, d } = track.pop()!

    if (isArray(data) && d < depth) {
      track.push(...data.map((item: any) => ({ data: item, d: d + 1 })))
    } else {
      result.push(data)
    }
  }

  return result.reverse()
}

export default flatten
