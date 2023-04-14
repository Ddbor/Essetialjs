import { isSymbol } from '..'

describe('isSymbol', () => {
  test('should return true if value is an Symbol', () => {
    expect(isSymbol(Symbol())).toBeTruthy()
    expect(isSymbol(Symbol.iterator)).toBeTruthy()
  })

  test('should return false if value is not an Symbol', () => {
    expect(isSymbol('')).toBeFalsy()
    expect(isSymbol(1)).toBeFalsy()
    expect(isSymbol([])).toBeFalsy()
    expect(isSymbol(null)).toBeFalsy()
    expect(isSymbol(Object(1))).toBeFalsy()
    expect(isSymbol(undefined)).toBeFalsy()
    expect(isSymbol(new Date())).toBeFalsy()
    expect(isSymbol(() => {})).toBeFalsy()
    expect(isSymbol(new Map())).toBeFalsy()
    expect(isSymbol(new WeakMap())).toBeFalsy()
    expect(isSymbol(new WeakSet())).toBeFalsy()
  })
})
