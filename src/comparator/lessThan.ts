import defaultCompareFunction from './defaultCompareFunction'

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
function lessThan<T>(a: T, b: T): boolean {
  return defaultCompareFunction(a, b) < 0
}

export default lessThan
