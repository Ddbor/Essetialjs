import { isArguments } from '../'

describe('isArguments', () => {
  it('should return true if the value is arguments object', () => {
    expect(
      isArguments(
        (function () {
          return arguments
        })()
      )
    ).toBe(true)
    expect(
      isArguments(
        (function () {
          'use strict'
          return arguments
          // @ts-ignore
        })(1, 2, 3)
      )
    ).toBe(true)
  })

  it('should return false if the value is not arguments object', () => {
    expect(isArguments(0)).toBe(false)
    expect(isArguments(-1)).toBe(false)
    expect(isArguments(NaN)).toBe(false)
    expect(isArguments(Infinity)).toBe(false)
    expect(isArguments(-Infinity)).toBe(false)
    expect(isArguments(true)).toBe(false)
    expect(isArguments(false)).toBe(false)
    expect(isArguments(null)).toBe(false)
    expect(isArguments(undefined)).toBe(false)
    expect(isArguments({})).toBe(false)
    expect(isArguments([])).toBe(false)
    expect(isArguments(() => {})).toBe(false)
    expect(isArguments(new Date())).toBe(false)
    expect(isArguments(/a/)).toBe(false)
    expect(isArguments(Symbol(''))).toBe(false)
  })
})
