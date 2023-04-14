/**
 * 比较 a 是否小于等于 b
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * lessThanOrEqual(1, 1) // true
 * lessThanOrEqual(1, 2) // true
 * lessThanOrEqual(2, 1) // false
 * lessThanOrEqual('a', 'a') // true
 * lessThanOrEqual('a', 'b') // true
 * lessThanOrEqual('b', 'a') // false
 */
declare function lessThanOrEqual<T>(a: T, b: T): boolean;
export default lessThanOrEqual;
