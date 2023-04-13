import isArray from '../is/isArray'

/**
 * 返回数组的最后一个元素
 * @param array 数组
 * @returns 返回数组的最后一个元素
 * @example
 *
 * const arr = [1, 2, 3]
 * tail(arr) // => 3
 *
 * const arr = []
 * tail(arr) // => undefined
 */
function tail<T>(array: T[]): T | undefined {
  return isArray(array) ? array[array.length - 1] : undefined
}

export default tail
