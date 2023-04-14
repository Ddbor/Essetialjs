/**
 * 比较 a 是否大于 b
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * greaterThan(1, 1) // false
 * greaterThan(1, 2) // false
 * greaterThan(2, 1) // true
 * greaterThan('a', 'a') // false
 * greaterThan('a', 'b') // false
 * greaterThan('b', 'a') // true
 */
declare function greaterThan<T>(a: T, b: T): boolean;
export default greaterThan;
