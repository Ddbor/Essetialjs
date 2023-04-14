import { isUndefined } from '..'

describe('isUndefined', () => {
  test('should return true if value is an undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy()
  })

  test('should return false if value is not an undefined', () => {
    expect(isUndefined('')).toBeFalsy()
    expect(isUndefined(1)).toBeFalsy()
    expect(isUndefined([])).toBeFalsy()
    expect(isUndefined(null)).toBeFalsy()
    expect(isUndefined(Object(1))).toBeFalsy()
    expect(isUndefined(new Date())).toBeFalsy()
    expect(isUndefined(() => {})).toBeFalsy()
    expect(isUndefined(new Map())).toBeFalsy()
    expect(isUndefined(new WeakMap())).toBeFalsy()
    expect(isUndefined(new WeakSet())).toBeFalsy()
  })
})
