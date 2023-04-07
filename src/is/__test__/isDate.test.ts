import { isDate } from '../'

describe('isDate', () => {
  it('should return true if the value is date', () => {
    expect(isDate(new Date())).toBe(true)
  })

  it('should return false if the value is not date', () => {
    expect(isDate(0)).toBe(false)
    expect(isDate(-1)).toBe(false)
    expect(isDate(NaN)).toBe(false)
    expect(isDate(Infinity)).toBe(false)
    expect(isDate(-Infinity)).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate([])).toBe(false)
    expect(isDate(() => {})).toBe(false)
    expect(isDate(/a/)).toBe(false)
    expect(isDate(Symbol(''))).toBe(false)
  })
})
