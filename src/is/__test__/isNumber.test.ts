import { isNumber } from '..'

describe('isNumber', () => {
  test('should return true when value is number', () => {
    expect(isNumber(1)).toBeTruthy()
    expect(isNumber(0)).toBeTruthy()
    expect(isNumber(-1)).toBeTruthy()
    expect(isNumber(Infinity)).toBeTruthy()
    expect(isNumber(NaN)).toBeTruthy()
  })

  test('should return false when value is not number', () => {
    expect(isNumber('1')).toBeFalsy()
    expect(isNumber('0')).toBeFalsy()
    expect(isNumber('-1')).toBeFalsy()
    expect(isNumber('Infinity')).toBeFalsy()
    expect(isNumber('NaN')).toBeFalsy()
    expect(isNumber(undefined)).toBeFalsy()
    expect(isNumber(null)).toBeFalsy()
    expect(isNumber(true)).toBeFalsy()
    expect(isNumber(false)).toBeFalsy()
    expect(isNumber([])).toBeFalsy()
    expect(isNumber({})).toBeFalsy()
    expect(isNumber(() => {})).toBeFalsy()
    expect(isNumber(new Date())).toBeFalsy()
    expect(isNumber(new Error())).toBeFalsy()
    expect(isNumber(/a/)).toBeFalsy()
    expect(isNumber(Symbol('a'))).toBeFalsy()
    expect(isNumber(new Map())).toBeFalsy()
    expect(isNumber(new Set())).toBeFalsy()
    expect(isNumber(new WeakMap())).toBeFalsy()
    expect(isNumber(new WeakSet())).toBeFalsy()
  })
})
