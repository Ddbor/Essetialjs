/**
 * 数组扁平化
 * @param arr
 * @param depth 指定扁平化的深度，默认为无限深度
 * @returns
 * @example
 * flatten([1, [2, [3, [4]], 5]]) // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, [4]], 5]], 2) // [1, 2, 3, [4], 5]
 */
declare function flatten(arr: any[], depth?: number): any[];
export default flatten;
