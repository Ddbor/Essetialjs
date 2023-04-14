import { isMap } from '..'

describe('isMap', () => {
  test('should return true if value is a Map', () => {
    expect(isMap(new Map())).toBeTruthy()
  })

  test('should return false if value is not a Map', () => {
    expect(isMap('')).toBeFalsy()
    expect(isMap(1)).toBeFalsy()
    expect(isMap({})).toBeFalsy()
    expect(isMap([])).toBeFalsy()
    expect(isMap(null)).toBeFalsy()
    expect(isMap(undefined)).toBeFalsy()
    expect(isMap(new Date())).toBeFalsy()
    expect(isMap(() => {})).toBeFalsy()
    expect(isMap(new Set())).toBeFalsy()
    expect(isMap(new WeakMap())).toBeFalsy()
    expect(isMap(new WeakSet())).toBeFalsy()
  })
})
