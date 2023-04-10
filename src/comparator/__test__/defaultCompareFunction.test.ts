import { defaultCompareFunction } from '../'

describe('defaultCompareFunction', () => {
  it('should compare numbers', () => {
    expect(defaultCompareFunction(1, 1)).toBe(0)
    expect(defaultCompareFunction(1, 2)).toBe(-1)
    expect(defaultCompareFunction(2, 1)).toBe(1)
  })

  it('should compare strings', () => {
    expect(defaultCompareFunction('a', 'a')).toBe(0)
    expect(defaultCompareFunction('a', 'b')).toBe(-1)
    expect(defaultCompareFunction('b', 'a')).toBe(1)
  })
})
