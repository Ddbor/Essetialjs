import { isRegExp } from '..'

describe('isRegExp', () => {
  test('should return true if value is an RegExp', () => {
    expect(isRegExp(/a/)).toBeTruthy()
    expect(isRegExp(new RegExp('a'))).toBeTruthy()
  })

  test('should return false if value is not an RegExp', () => {
    expect(isRegExp('')).toBeFalsy()
    expect(isRegExp(1)).toBeFalsy()
    expect(isRegExp([])).toBeFalsy()
    expect(isRegExp(null)).toBeFalsy()
    expect(isRegExp(Object(1))).toBeFalsy()
    expect(isRegExp(undefined)).toBeFalsy()
    expect(isRegExp(new Date())).toBeFalsy()
    expect(isRegExp(() => {})).toBeFalsy()
    expect(isRegExp(new Map())).toBeFalsy()
    expect(isRegExp(new Set())).toBeFalsy()
    expect(isRegExp(new WeakMap())).toBeFalsy()
    expect(isRegExp(new WeakSet())).toBeFalsy()
  })
})
