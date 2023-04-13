import { findIndex } from '..'

describe('findIndex', () => {
  it('should find index of the first element that matches the callback', () => {
    expect(findIndex([1, 2, 3, 4], (item) => item === 3)).toBe(2)
    expect(findIndex([1, 2, 3, 4], (item) => item === 5)).toBe(-1)
  })
})
