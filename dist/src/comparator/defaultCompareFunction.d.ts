/**
 * 默认的比较函数，用于比较数字和字符串
 * 返回 -1 表示 a < b
 * 返回 0 表示 a = b
 * 返回 1 表示 a > b
 * @param a
 * @param b
 * @returns
 * @example
 * defaultCompareFunction(1, 1) // 0
 * defaultCompareFunction(1, 2) // -1
 * defaultCompareFunction(2, 1) // 1
 * defaultCompareFunction('a', 'a') // 0
 * defaultCompareFunction('a', 'b') // -1
 * defaultCompareFunction('b', 'a') // 1
 */
declare function defaultCompareFunction(a: number | string, b: number | string): 0 | 1 | -1;
export default defaultCompareFunction;
