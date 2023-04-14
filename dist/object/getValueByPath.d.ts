/**
 * 根据路径获取对象的属性值
 * @param obj 要查询的对象
 * @param path 获取属性的路径
 * @param defaultValue 为 `undefined` 时返回的值
 * @returns 返回解析值
 * @example
 * getValueByPath({ a: { b: 1 } }, 'a.b') // => 1
 * getValueByPath({ a: { b: 1 } }, ['a', 'b']) // => 1
 * getValueByPath({ a: { b: 1 } }, 'a.c', 2) // => 2
 * getValueByPath({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c') // => 3
 */
declare function getValueByPath(obj: any, path: string | any[], defaultValue?: any): any;
export default getValueByPath;
