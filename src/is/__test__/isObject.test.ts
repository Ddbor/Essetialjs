import { isObject } from '../'

describe('isObject', () => {
  test('should return true if value is an object', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject(new Object())).toBeTruthy()
  })

  test('should return false if value is not an object', () => {
    expect(isObject('')).toBeFalsy()
    expect(isObject(1)).toBeFalsy()
    expect(isObject([])).toBeFalsy()
    expect(isObject(null)).toBeFalsy()
    expect(isObject(Object(1))).toBeFalsy()
    expect(isObject(undefined)).toBeFalsy()
    expect(isObject(new Date())).toBeFalsy()
    expect(isObject(() => {})).toBeFalsy()
    expect(isObject(new Map())).toBeFalsy()
    expect(isObject(new Set())).toBeFalsy()
    expect(isObject(new WeakMap())).toBeFalsy()
    expect(isObject(new WeakSet())).toBeFalsy()
  })
})
