/**
 * 数组去重，只有第一次出现的元素会被保留
 * @param arr
 * @param pathOrGetter 在处理对象数组时，可以指定用于确定唯一性的键，如果不传，则按数组元素的值进行去重，如果传入字符串或数组，则按对象的该键的值进行去重，如果传入函数，则按函数的返回值进行去重
 * @returns 返回去重后的数组，不会改变原数组
 * @example
 *
 * unique([1, 2, 3, 1, 2, 3])
 * // => [1, 2, 3]
 *
 * unique([{ a: 1, b: 'b' }, { a: 1 }, { a: 2 }], 'a')
 * // => [{ a: 1, b: 'b' }, { a: 2 }]
 *
 * unique([{ a: 1 }, { a: 1 }, { a: 2 }], ['a'])
 * // => [{ a: 1 }, { a: 2 }]
 *
 * unique([{ a: 1, b: 'b' }, { a: 1, b: 'b', c: 'c' }, { a: 2 }], (item) => item.a + item.b)
 * // => [{ a: 1, b: 'b' }, { a: 2 }]
 *
 */
declare function unique<T>(arr: T[], pathOrGetter?: string | ((item: T) => any) | string[]): T[];
export default unique;
