/**
 * 查找数组中符合条件的第一个元素的索引
 * @param arr 要查找的数组
 * @param callback 回调函数，返回true时表示找到了符合条件的元素
 * @returns 返回符合条件的元素的索引，如果没有找到则返回-1
 * @example
 * findIndex([1, 2, 3, 4], (item) => item === 3) // 2
 *
 * findIndex([1, 2, 3, 4], (item) => item === 5) // -1
 */
declare function findIndex<T>(arr: T[], callback: (item: T) => boolean): number;
export default findIndex;
