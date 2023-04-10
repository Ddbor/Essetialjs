import { lessThan } from '..'

describe('lessThan', () => {
  it('should compare numbers', () => {
    expect(lessThan(1, 1)).toBe(false)
    expect(lessThan(1, 2)).toBe(true)
    expect(lessThan(2, 1)).toBe(false)
  })

  it('should compare strings', () => {
    expect(lessThan('a', 'a')).toBe(false)
    expect(lessThan('a', 'b')).toBe(true)
    expect(lessThan('b', 'a')).toBe(false)
  })
})
