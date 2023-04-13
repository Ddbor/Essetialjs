import { unique } from '..'

describe('unique', () => {
  it('should return the unique array', () => {
    expect(unique([1, 2, 3, 2, 1])).toEqual([1, 2, 3])
    expect(unique([{ a: 1, b: 'b' }, { a: 1 }, { a: 2 }], 'a')).toEqual([
      { a: 1, b: 'b' },
      { a: 2 }
    ])
    expect(unique([{ a: 1 }, { a: 1 }, { a: 2 }], ['a'])).toEqual([
      { a: 1 },
      { a: 2 }
    ])
    // 自定义key
    expect(
      unique(
        [{ a: 1, b: 'b' }, { a: 1, b: 'b', c: 'c' }, { a: 2 }],
        (item: any) => item.a + item.b
      )
    ).toEqual([{ a: 1, b: 'b' }, { a: 2 }])
  })

  // 如果不是数组，直接返回
  it('should return the array if it is not an array', () => {
    expect(unique(1 as any)).toEqual(1)
    expect(unique('' as any)).toEqual('')
    expect(unique({} as any)).toEqual({})
    expect(unique(null as any)).toEqual(null)
    expect(unique(undefined as any)).toEqual(undefined)
  })

  // 如果数组长度小于等于1，直接返回
  it('should return the array if the length of the array is less than or equal to 1', () => {
    expect(unique([])).toEqual([])
    expect(unique([1])).toEqual([1])
  })
})
