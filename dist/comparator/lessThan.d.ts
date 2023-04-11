/**
 * 比较 a 是否小于 b
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * lessThan(1, 1) // false
 * lessThan(1, 2) // true
 * lessThan(2, 1) // false
 * lessThan('a', 'a') // false
 * lessThan('a', 'b') // true
 * lessThan('b', 'a') // false
 */
declare function lessThan(a: number | string, b: number | string): boolean;
export default lessThan;
