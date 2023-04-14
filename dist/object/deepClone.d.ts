/**
 * 深拷贝
 *
 * 支持Array、Object、Date、RegExp、Map、Set、Number、String、Boolean、null、undefined
 *
 * @param obj 要拷贝的对象
 * @returns 拷贝后的对象
 * @example
 * const obj = {
 *  a: 1,
 *  b: { c: [1, 2, 3], d: { e: 4 } },
 *  g: new Date()
 * }
 * const clonedObj = deepClone(obj)
 */
declare function deepClone<T extends Record<any, any> | any[] | Date | RegExp | Map<any, any> | Set<any> | number | string | boolean | null | undefined>(obj: T): T;
export default deepClone;
