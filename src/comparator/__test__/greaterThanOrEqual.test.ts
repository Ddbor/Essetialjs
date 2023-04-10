import { greaterThanOrEqual } from '..'

describe('greaterThanOrEqual', () => {
  it('should compare numbers', () => {
    expect(greaterThanOrEqual(1, 1)).toBe(true)
    expect(greaterThanOrEqual(1, 2)).toBe(false)
    expect(greaterThanOrEqual(2, 1)).toBe(true)
  })

  it('should compare strings', () => {
    expect(greaterThanOrEqual('a', 'a')).toBe(true)
    expect(greaterThanOrEqual('a', 'b')).toBe(false)
    expect(greaterThanOrEqual('b', 'a')).toBe(true)
  })
})
