import { equal } from '..'

describe('equal', () => {
  it('should compare numbers', () => {
    expect(equal(1, 1)).toBe(true)
    expect(equal(1, 2)).toBe(false)
    expect(equal(2, 1)).toBe(false)
  })

  it('should compare strings', () => {
    expect(equal('a', 'a')).toBe(true)
    expect(equal('a', 'b')).toBe(false)
    expect(equal('b', 'a')).toBe(false)
  })
})
