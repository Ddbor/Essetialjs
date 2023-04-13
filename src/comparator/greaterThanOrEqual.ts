import equal from './equal'
import greaterThan from './greaterThan'

/**
 * 比较 a 是否大于等于 b
 * @param a
 * @param b
 * @returns {boolean}
 * @example
 * greaterThanOrEqual(1, 1) // true
 * greaterThanOrEqual(1, 2) // false
 * greaterThanOrEqual(2, 1) // true
 * greaterThanOrEqual('a', 'a') // true
 * greaterThanOrEqual('a', 'b') // false
 * greaterThanOrEqual('b', 'a') // true
 */
function greaterThanOrEqual<T>(a: T, b: T) {
  return greaterThan(a, b) || equal(a, b)
}

export default greaterThanOrEqual
