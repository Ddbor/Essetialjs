/**
 * 判断是否是 Symbol 对象
 * @param value 要判断的值
 * @returns 返回一个布尔值
 * @example
 * isSymbol(Symbol('abc')) // => true
 * isSymbol(new Symbol('abc')) // => false
 * isSymbol('abc') // => false
 * isSymbol(1) // => false
 */
declare function isSymbol(value: any): boolean;
export default isSymbol;
