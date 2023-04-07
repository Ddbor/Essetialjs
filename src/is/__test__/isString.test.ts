import { isString } from '../'

describe('isString', () => {
  it('should return true for string', () => {
    expect(isString('')).toBe(true)
    expect(isString(' ')).toBe(true)
    expect(isString('foo')).toBe(true)
    expect(isString('foo bar')).toBe(true)
  })

  it('should return false for non-string', () => {
    expect(isString(0)).toBe(false)
    expect(isString(1)).toBe(false)
    expect(isString(-1)).toBe(false)
    expect(isString(NaN)).toBe(false)
    expect(isString(Infinity)).toBe(false)
    expect(isString(-Infinity)).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(() => {})).toBe(false)
  })
})
