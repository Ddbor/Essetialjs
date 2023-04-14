import { parsePathToArray } from '..'

describe('parsePathToArray', () => {
  it('should return ["a", "b", "c"]', () => {
    expect(parsePathToArray('a.b.c')).toEqual(['a', 'b', 'c'])
    expect(parsePathToArray('a.b..d.c')).toEqual(['a', 'b..d', 'c'])
  })

  it('should return ["a", "b", "0"]', () => {
    expect(parsePathToArray('a.b[0]')).toEqual(['a', 'b', '0'])
  })

  it('should return ["1", "a", "b", "0"]', () => {
    expect(parsePathToArray('[1]a.b[0]')).toEqual(['1', 'a', 'b', '0'])
  })

  it('should return ["a", "b", "c"]', () => {
    expect(parsePathToArray(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
  })

  it('should return ["a", "0", "b", "1", "c"]', () => {
    expect(parsePathToArray('a[0].b[1].c')).toEqual(['a', '0', 'b', '1', 'c'])
  })

  it('should return [Symbol]', () => {
    const symbolKey = Symbol('symbolKey')
    // @ts-ignore
    expect(parsePathToArray(symbolKey)).toEqual([symbolKey])
  })

  it('should return [Boolean]', () => {
    // @ts-ignore
    expect(parsePathToArray(true)).toEqual([true])
    // @ts-ignore
    expect(parsePathToArray(false)).toEqual([false])
  })

  it('should return [Empty]', () => {
    expect(parsePathToArray('')).toEqual([''])
    expect(parsePathToArray(' .a')).toEqual([' ', 'a'])
    expect(parsePathToArray('.a.')).toEqual(['a'])
    expect(parsePathToArray(' ')).toEqual([' '])
  })

  it('should return [Number]', () => {
    // @ts-ignore
    expect(parsePathToArray(1)).toEqual([1])
  })

  it('should return [Null]', () => {
    // @ts-ignore
    expect(parsePathToArray(null)).toEqual([null])
  })

  it('should return [Undefined]', () => {
    // @ts-ignore
    expect(parsePathToArray(undefined)).toEqual([undefined])
  })
})
