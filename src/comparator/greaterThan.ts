import defaultCompareFunction from './defaultCompareFunction'

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
function greaterThan(a: number | string, b: number | string) {
  return defaultCompareFunction(a, b) > 0
}

export default greaterThan
