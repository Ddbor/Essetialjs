import { flatten } from '..'

describe('flatten', () => {
  it('should flatten array', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5])
  })

  it('should flatten array with depth', () => {
    expect(flatten([1, [2, [3, [4]], 5]], 2)).toEqual([1, 2, 3, [4], 5])
  })
})
