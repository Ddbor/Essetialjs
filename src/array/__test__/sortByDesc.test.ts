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
  })
})
