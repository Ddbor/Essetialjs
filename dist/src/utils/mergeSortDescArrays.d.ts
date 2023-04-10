/**
 * 合并两个数组按降序排序
 * @param leftArray
 * @param rightArray
 * @param pathOrGetter 用于获取数组元素的路径或函数
 * @returns
 */
declare function mergeSortDescArrays(leftArray: Array<any>, rightArray: Array<any>, pathOrGetter: any | ((item: any) => any)): any[];
export default mergeSortDescArrays;
