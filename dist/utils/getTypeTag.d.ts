/**
 * 获取类型标签
 * @param value 要检查的值
 * @returns 返回类型标签
 */
declare function getTypeTag<T>(value: T): string;
export default getTypeTag;
