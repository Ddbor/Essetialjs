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
  })
})
