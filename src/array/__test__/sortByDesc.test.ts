import { sortByDesc } from '..'

describe('sortByDesc', () => {
  it('should sort an array in descending order', () => {
    const res = [
      { id: 4, info: { name: ['d'] } },
      { id: 3, info: { name: ['c'] } },
      { id: 2, info: { name: ['b'] } },
      { id: 1, info: { name: ['a'] } }
    ]

    const testArr = [
      { id: 2, info: { name: ['b'] } },
      { id: 3, info: { name: ['c'] } },
      { id: 1, info: { name: ['a'] } },
      { id: 4, info: { name: ['d'] } }
    ]

    const result = sortByDesc(testArr, 'id')
    expect(result).toEqual(res)

    const result2 = sortByDesc(testArr, 'info.name[0]')
    expect(result2).toEqual(res)

    const result3 = sortByDesc(testArr, (item: any) => item.id)
    expect(result3).toEqual(res)

    const result4 = sortByDesc(testArr, ['info', 'name', 0] as string[])
    expect(result4).toEqual(res)

    // @ts-ignore
    const result5 = sortByDesc({ id: 1 }, 'id')
    expect(result5).toEqual({ id: 1 })

    const result6 = sortByDesc([{ id: 1 }], 'id')
    expect(result6).toEqual([{ id: 1 }])

    const result7 = sortByDesc(
      [
        { id: null, name: 'b' },
        { id: 1, name: 'a' },
        { id: null, name: 'c' }
      ],
      'id'
    )
    expect(result7).toEqual([
      { id: 1, name: 'a' },
      { id: null, name: 'b' },
      { id: null, name: 'c' }
    ])

    const result8 = sortByDesc(
      [
        { id: 1, name: 'a' },
        { id: 1, name: 'b' }
      ],
      'id'
    )
    expect(result8).toEqual([
      { id: 1, name: 'a' },
      { id: 1, name: 'b' }
    ])
  })

  it('should sort an array in descending order', () => {
    const res = [3, 2, 1]
    const testArr = [2, 3, 1]

    const result = sortByDesc(testArr)
    expect(result).toEqual(res)
  })
})
