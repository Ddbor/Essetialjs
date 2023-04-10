/**
 * 合并两个数组按升序排序
 * @param leftArray
 * @param rightArray
 * @param pathOrGetter 用于获取数组元素的路径或函数
 * @returns
 */
declare function mergeSortAscArrays(leftArray: Array<any>, rightArray: Array<any>, pathOrGetter: any | ((item: any) => any)): any[];
export default mergeSortAscArrays;
