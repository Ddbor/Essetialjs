import { isArray } from '..'

describe('isArray', () => {
  it('should return true if the value is Array', () => {
    expect(isArray([])).toBe(true)
  })

  it('should return false if the value is not Array', () => {
    expect(isArray(0)).toBe(false)
    expect(isArray(-1)).toBe(false)
    expect(isArray(NaN)).toBe(false)
    expect(isArray(Infinity)).toBe(false)
    expect(isArray(-Infinity)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(false)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray({})).toBe(false)
    expect(isArray(() => {})).toBe(false)
    expect(isArray(new Date())).toBe(false)
    expect(isArray(/a/)).toBe(false)
    expect(isArray(Symbol(''))).toBe(false)
  })
})
