import { randomInArray } from '../math'

/**
 * 打乱数组，返回一个新数组
 * @param arr
 * @returns
 * @example
 * shuffle([1, 2, 3, 4, 5])
 * // [2, 4, 1, 5, 3]
 *
 * shuffle([{a: 1}, {a: 2}, {a: 3}])
 * // [{a: 2}, {a: 3}, {a: 1}]
 */
function shuffle(arr: any[]) {
  return randomInArray(arr, arr.length)
}

export default shuffle
