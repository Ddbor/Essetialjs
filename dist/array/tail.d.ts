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
declare function tail<T>(array: T[]): T | undefined;
export default tail;
