import isArray from '../is/isArray'

/**
 * 将数组分割成多个 size 长度的区块，并将这些区块组成一个新数组。如果数组无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param array 要处理的数组
 * @param size  每个区块的长度
 * @returns 返回一个包含分割区块的新数组
 * @example
 *
 * chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)
 * // => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
 *
 * chunk([1, 2, 3], 1)
 * // => [[1], [2], [3]]
 *
 * chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
 * // => [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
 */
function chunk<T>(array: T[], size: number) {
  const length = !isArray(array) ? 0 : array.length
  if (!length || size < 1) {
    return [array]
  }
  let index = 0
  let resIndex = 0
  const result: T[][] = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }

  return result
}

export default chunk
