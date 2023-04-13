import { findLastIndex } from '..'

describe('findLastIndex', () => {
  it('should find index of the last element that matches the callback', () => {
    expect(findLastIndex([1, 2, 3, 4], (item) => item === 3)).toBe(2)
    expect(findLastIndex([1, 2, 3, 4], (item) => item === 5)).toBe(-1)
  })
})
