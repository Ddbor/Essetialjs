import { lessThanOrEqual } from '..'

describe('lessThanOrEqual', () => {
  it('should compare numbers', () => {
    expect(lessThanOrEqual(1, 1)).toBe(true)
    expect(lessThanOrEqual(1, 2)).toBe(true)
    expect(lessThanOrEqual(2, 1)).toBe(false)
  })

  it('should compare strings', () => {
    expect(lessThanOrEqual('a', 'a')).toBe(true)
    expect(lessThanOrEqual('a', 'b')).toBe(true)
    expect(lessThanOrEqual('b', 'a')).toBe(false)
  })
})
