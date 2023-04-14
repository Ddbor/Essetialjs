/**
 * 计算笛卡尔积
 * @param arr 二维数组
 * @returns 笛卡尔积
 * @example
 *
 * cartesianProduct([[1, 2], [3, 4]])
 * // [[1, 3], [1, 4], [2, 3], [2, 4]]
 *
 * cartesianProduct([['a', 'b'], [1, 2], [true, false]])
 * // [['a', 1, true], ['a', 1, false], ['a', 2, true], ['a', 2, false], ['b', 1, true], ['b', 1, false], ['b', 2, true], ['b', 2, false]]
 */
declare function cartesianProduct<T>(arr: T[][]): T[][];
export default cartesianProduct;
