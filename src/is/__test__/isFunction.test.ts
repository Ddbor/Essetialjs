import { isFunction } from '../'

describe('isFunction', () => {
  test('should return true if value is a function', () => {
    expect(isFunction(() => {})).toBeTruthy()
  })

  test('should return false if value is not a function', () => {
    expect(isFunction('')).toBeFalsy()
    expect(isFunction(1)).toBeFalsy()
    expect(isFunction({})).toBeFalsy()
    expect(isFunction([])).toBeFalsy()
    expect(isFunction(null)).toBeFalsy()
    expect(isFunction(undefined)).toBeFalsy()
  })
})
