import { sortByAsc } from '..'

describe('sortByAsc', () => {
  it('should return Asc', () => {
    const res = [
      { id: 1, info: { name: ['a'] } },
      { id: 2, info: { name: ['b'] } },
      { id: 3, info: { name: ['c'] } },
      { id: 4, info: { name: ['d'] } }
    ]
    const testArr = [
      { id: 2, info: { name: ['b'] } },
      { id: 3, info: { name: ['c'] } },
      { id: 1, info: { name: ['a'] } },
      { id: 4, info: { name: ['d'] } }
    ]

    const result = sortByAsc(testArr, 'id')
    expect(result).toEqual(res)

    const result2 = sortByAsc(testArr, 'info.name[0]')
    expect(result2).toEqual(res)

    const result3 = sortByAsc(testArr, (item: any) => item.id)
    expect(result3).toEqual(res)

    const result4 = sortByAsc(testArr, ['info', 'name', 0])
    expect(result4).toEqual(res)

    // @ts-ignore
    const result5 = sortByAsc({ id: 1 }, 'id')
    expect(result5).toEqual({ id: 1 })

    const result6 = sortByAsc([{ id: 1 }], 'id')
    expect(result6).toEqual([{ id: 1 }])

    const result7 = sortByAsc(
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

    const result8 = sortByAsc(
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
})
