import { head } from '..'

describe('head', () => {
  it('should return the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1)
  })

  it('should return undefined if the array is empty', () => {
    expect(head([])).toBeUndefined()
  })

  // 如果不是数组，返回undefined
  it('should return undefined if the argument is not an array', () => {
    // @ts-ignore
    expect(head({})).toBeUndefined()
    // @ts-ignore
    expect(head(1)).toBeUndefined()
    // @ts-ignore
    expect(head('a')).toBeUndefined()
    // @ts-ignore
    expect(head(true)).toBeUndefined()
    // @ts-ignore
    expect(head(null)).toBeUndefined()
    // @ts-ignore
    expect(head(undefined)).toBeUndefined()
    // @ts-ignore
  })
})
