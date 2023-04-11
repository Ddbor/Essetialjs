/**
 * 将路径转换为数组
 * @param path 路径
 * @returns 返回转换后的数组
 * @example
 * parsePathToArray('a.b.c') // => ['a', 'b', 'c']
 * parsePathToArray('[0]a.b.c[1]') // => ['0', 'a', 'b', 'c', '1']
 * parsePathToArray(['a', 'b', 'c']) // => ['a', 'b', 'c']
 * parsePathToArray('a[0].b[1].c') // => ['a', '0', 'b', '1', 'c']
 * parsePathToArray('a[0].b[1].c') // => ['a', '0', 'b', '1', 'c']
 * parsePathToArray(Symbol('symbolKey')) // => [Symbol]
 * parsePathToArray(true) // => [true]
 * parsePathToArray(false) // => [false]
 * parsePathToArray('') // => ['']
 * parsePathToArray(' ') // => [' ']
 *
 */
declare function parsePathToArray(path: any): any;
export default parsePathToArray;
