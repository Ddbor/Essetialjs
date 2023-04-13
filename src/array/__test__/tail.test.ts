import { tail } from '..'

describe('tail', () => {
  it('should return the last element of an array', () => {
    expect(tail([1, 2, 3])).toBe(3)
  })

  it('should return undefined if the array is empty', () => {
    expect(tail([])).toBeUndefined()
  })

  // 如果不是数组，返回undefined
  it('should return undefined if the argument is not an array', () => {
    // @ts-ignore
    expect(tail({})).toBeUndefined()
    // @ts-ignore
    expect(tail(1)).toBeUndefined()
    // @ts-ignore
    expect(tail('a')).toBeUndefined()
    // @ts-ignore
    expect(tail(true)).toBeUndefined()
    // @ts-ignore
    expect(tail(null)).toBeUndefined()
    // @ts-ignore
    expect(tail(undefined)).toBeUndefined()
    // @ts-ignore
  })
})
