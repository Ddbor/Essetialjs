import { greaterThan } from '..'

describe('greaterThan', () => {
  it('should compare numbers', () => {
    expect(greaterThan(1, 1)).toBe(false)
    expect(greaterThan(1, 2)).toBe(false)
    expect(greaterThan(2, 1)).toBe(true)
  })

  it('should compare strings', () => {
    expect(greaterThan('a', 'a')).toBe(false)
    expect(greaterThan('a', 'b')).toBe(false)
    expect(greaterThan('b', 'a')).toBe(true)
  })
})
