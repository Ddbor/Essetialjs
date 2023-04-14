/**
 * 比较两个值是否相等
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * equal(1, 1) // true
 * equal(1, 2) // false
 * equal(2, 1) // false
 * equal('a', 'a') // true
 * equal('a', 'b') // false
 * equal('b', 'a') // false
 */
declare function equal<T>(a: T, b: T): boolean;
export default equal;
