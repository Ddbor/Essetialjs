import { isArrayBuffer } from '../'

describe('isArrayBuffer', () => {
  it('should return true if the value is ArrayBuffer', () => {
    expect(isArrayBuffer(new ArrayBuffer(2))).toBe(true)
  })

  it('should return false if the value is not ArrayBuffer', () => {
    expect(isArrayBuffer(0)).toBe(false)
    expect(isArrayBuffer(-1)).toBe(false)
    expect(isArrayBuffer(NaN)).toBe(false)
    expect(isArrayBuffer(Infinity)).toBe(false)
    expect(isArrayBuffer(-Infinity)).toBe(false)
    expect(isArrayBuffer(true)).toBe(false)
    expect(isArrayBuffer(false)).toBe(false)
    expect(isArrayBuffer(null)).toBe(false)
    expect(isArrayBuffer(undefined)).toBe(false)
    expect(isArrayBuffer({})).toBe(false)
    expect(isArrayBuffer([])).toBe(false)
    expect(isArrayBuffer(() => {})).toBe(false)
    expect(isArrayBuffer(new Date())).toBe(false)
    expect(isArrayBuffer(/a/)).toBe(false)
    expect(isArrayBuffer(Symbol(''))).toBe(false)
  })
})
