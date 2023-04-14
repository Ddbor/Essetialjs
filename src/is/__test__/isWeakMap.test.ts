import { isWeakMap } from '..'

describe('isWeakMap', () => {
  test('should return true if value is an WeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBeTruthy()
  })

  test('should return false if value is not an WeakMap', () => {
    expect(isWeakMap('')).toBeFalsy()
    expect(isWeakMap(1)).toBeFalsy()
    expect(isWeakMap([])).toBeFalsy()
    expect(isWeakMap(null)).toBeFalsy()
    expect(isWeakMap(Object(1))).toBeFalsy()
    expect(isWeakMap(undefined)).toBeFalsy()
    expect(isWeakMap(new Date())).toBeFalsy()
    expect(isWeakMap(() => {})).toBeFalsy()
    expect(isWeakMap(new Map())).toBeFalsy()
    expect(isWeakMap(new Set())).toBeFalsy()
    expect(isWeakMap(new WeakSet())).toBeFalsy()
  })
})
