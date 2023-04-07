import { isWeakSet } from '../'

describe('isWeakSet', () => {
  test('should return true if value is an WeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBeTruthy()
  })

  test('should return false if value is not an WeakSet', () => {
    expect(isWeakSet('')).toBeFalsy()
    expect(isWeakSet(1)).toBeFalsy()
    expect(isWeakSet([])).toBeFalsy()
    expect(isWeakSet(null)).toBeFalsy()
    expect(isWeakSet(Object(1))).toBeFalsy()
    expect(isWeakSet(undefined)).toBeFalsy()
    expect(isWeakSet(new Date())).toBeFalsy()
    expect(isWeakSet(() => {})).toBeFalsy()
    expect(isWeakSet(new Map())).toBeFalsy()
    expect(isWeakSet(new WeakMap())).toBeFalsy()
  })
})
