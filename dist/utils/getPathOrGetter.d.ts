/**
 * 获取路径或者函数
 * @param pathOrGetter 路径或者函数
 * @returns 返回函数
 */
declare function getPathOrGetter<T>(pathOrGetter: string | any[] | ((item: T) => any)): (item: T) => any;
export default getPathOrGetter;
