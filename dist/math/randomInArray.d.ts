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
declare function randomInArray(array: any[], size?: number): any[];
export default randomInArray;
