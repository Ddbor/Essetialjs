import { cartesianProduct } from '..'

describe('cartesianProduct', () => {
  it('should return the cartesian product of the given arrays', () => {
    expect(
      cartesianProduct([
        ['a', 'b'],
        [1, 2],
        [true, false]
      ])
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

  // 如果不是数组，则抛出异常
  it('should throw an error if the given argument is not an array', () => {
    // @ts-ignore
    expect(() => cartesianProduct('abc')).toThrow(TypeError)
  })

  // 如果有一项不是数组，则抛出异常
  it('should throw an error if the given argument contains a non-array item', () => {
    // @ts-ignore
    expect(() => cartesianProduct([['a', 'b'], 1])).toThrow(TypeError)
  })

  it('should throw an error if the given argument contains arrays of different lengths', () => {
    expect(cartesianProduct([['a', 'b'], [1]])).toEqual([
      ['a', 1],
      ['b', 1]
    ])
  })
})