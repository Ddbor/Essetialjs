import { isNull } from '..'

describe('isNull', () => {
  test('should return true if value is null', () => {
    expect(isNull(null)).toBeTruthy()
  })

  test('should return false if value is not null', () => {
    expect(isNull('')).toBeFalsy()
    expect(isNull(1)).toBeFalsy()
    expect(isNull({})).toBeFalsy()
    expect(isNull([])).toBeFalsy()
    expect(isNull(undefined)).toBeFalsy()
    expect(isNull(new Date())).toBeFalsy()
    expect(isNull(() => {})).toBeFalsy()
    expect(isNull(new Map())).toBeFalsy()
    expect(isNull(new Set())).toBeFalsy()
    expect(isNull(new WeakMap())).toBeFalsy()
    expect(isNull(new WeakSet())).toBeFalsy()
  })
})
