import { isJson } from '../'

describe('isJson', () => {
  test('should return true if value is an object', () => {
    expect(isJson({})).toBeTruthy()
    expect(isJson(new Object())).toBeTruthy()
  })

  test('should return false if value is not an object', () => {
    expect(isJson('')).toBeFalsy()
    expect(isJson(1)).toBeFalsy()
    expect(isJson([])).toBeFalsy()
    expect(isJson(null)).toBeFalsy()
    expect(isJson(Object(1))).toBeFalsy()
    expect(isJson(undefined)).toBeFalsy()
    expect(isJson(new Date())).toBeFalsy()
    expect(isJson(() => {})).toBeFalsy()
    expect(isJson(new Map())).toBeFalsy()
    expect(isJson(new Set())).toBeFalsy()
    expect(isJson(new WeakMap())).toBeFalsy()
    expect(isJson(new WeakSet())).toBeFalsy()
  })
})
