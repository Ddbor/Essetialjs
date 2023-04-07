import { isSet } from '../'

describe('isSet', () => {
  test('should return true if value is an Set', () => {
    expect(isSet(new Set())).toBeTruthy()
  })

  test('should return false if value is not an Set', () => {
    expect(isSet('')).toBeFalsy()
    expect(isSet(1)).toBeFalsy()
    expect(isSet([])).toBeFalsy()
    expect(isSet(null)).toBeFalsy()
    expect(isSet(Object(1))).toBeFalsy()
    expect(isSet(undefined)).toBeFalsy()
    expect(isSet(new Date())).toBeFalsy()
    expect(isSet(() => {})).toBeFalsy()
    expect(isSet(new Map())).toBeFalsy()
    expect(isSet(new WeakMap())).toBeFalsy()
    expect(isSet(new WeakSet())).toBeFalsy()
  })
})
