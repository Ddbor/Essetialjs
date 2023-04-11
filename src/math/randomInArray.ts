import random from './random'

/**
 * 从数组中随机取出指定个数的元素
 * @param array 数组
 * @param size 取出的元素个数，如果size大于数组长度，返回原数组，如果size小于等于0，返回空数组
 * @returns 返回一个新数组
 * @example
 * randomInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
 * // => [ 5, 10, 9, 8, 7 ]
 *
 * randomInArray([1, 2, 3], 4)
 * // => [1, 2, 3]
 *
 * randomInArray([1, 2, 3], 0)
 * // => []
 */
function randomInArray(array: any[], size: number = 1): any[] {
  // 如果size小于等于0，返回空数组
  if (size <= 0) return []
  // 如果size大于数组长度，返回原数组
  if (size >= array.length) return array

  const result = []
  // 克隆数组，避免影响原数组
  const clone = array.slice(0)

  for (let i = 0; i < size; i++) {
    const randomIndex = random(0, clone.length - 1)
    result.push(clone[randomIndex])
    // 交换位置，将已经取出的元素放到数组末尾，然后再将数组长度减一
    // 不会影响随机性
    // 不用splice，因为splice会对数组进行重排，会影响性能
    if (randomIndex !== clone.length - 1) {
      ;[clone[randomIndex], clone[clone.length - 1]] = [
        clone[clone.length - 1],
        clone[randomIndex]
      ]
    }

    clone.length--
  }
  return result
}

export default randomInArray
