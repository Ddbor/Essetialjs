import isArray from '../is/isArray'

/**
 * 返回数组的第一个元素
 * @param array 数组
 * @returns 返回数组的第一个元素
 * @example
 *
 * const arr = [1, 2, 3]
 * head(arr) // => 1
 *
 * const arr = []
 * head(arr) // => undefined
 */
function head<T>(array: T[]): T | undefined {
  return isArray(array) ? array[0] : undefined
}

export default head
