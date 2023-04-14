import { cartesianProduct } from '..'

describe('cartesianProduct', () => {
  it('should return the cartesian product of the given arrays', () => {
    expect(
      cartesianProduct([['a', 'b'] as any[], [1, 2], [true, false]])
    ).toEqual([
      ['a', 1, true],
      ['a', 1, false],
      ['a', 2, true],
      ['a', 2, false],
      ['b', 1, true],
      ['b', 1, false],
      ['b', 2, true],
      ['b', 2, false]
    ])
  })

  it('should throw an error if the given argument contains arrays of different lengths', () => {
    expect(cartesianProduct([['a', 'b'] as any[], [1]])).toEqual([
      ['a', 1],
      ['b', 1]
    ])
  })
})
