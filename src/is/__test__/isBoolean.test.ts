import { isBoolean } from '..'

describe('isBoolean', () => {
  it('should return true if the value is boolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(new Boolean(true))).toBe(true)
    expect(isBoolean(new Boolean(false))).toBe(true)
    expect(isBoolean(Object(true))).toBe(true)
    expect(isBoolean(Object(false))).toBe(true)
  })

  it('should return false if the value is not boolean', () => {
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean(-1)).toBe(false)
    expect(isBoolean(NaN)).toBe(false)
    expect(isBoolean(Infinity)).toBe(false)
    expect(isBoolean(-Infinity)).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
    expect(isBoolean({})).toBe(false)
    expect(isBoolean([])).toBe(false)
    expect(isBoolean(() => {})).toBe(false)
    expect(isBoolean(new Date())).toBe(false)
    expect(isBoolean(/a/)).toBe(false)
    expect(isBoolean(Symbol(''))).toBe(false)
  })
})
