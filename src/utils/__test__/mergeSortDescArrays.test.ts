import { mergeSortDescArrays } from '..'

describe('mergeSortDescArrays', () => {
  it('should merge two arrays and sort them in descending order', () => {
    const leftArray = [5, 4, 3, 2, 1]
    const rightArray = [10, 9, 8, 7, 6]
    const pathOrGetter = (item: number) => item
    const result = mergeSortDescArrays(leftArray, rightArray, pathOrGetter)
    expect(result).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  })
})
