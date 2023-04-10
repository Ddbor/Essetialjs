import { mergeSortAscArrays } from '..'

describe('mergeSortAscArrays', () => {
  it('should return Asc', () => {
    // 测试对象数组
    const leftArray = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' }
    ]
    const rightArray = [
      { id: 4, name: 'd' },
      { id: 5, name: 'e' }
    ]
    const result = mergeSortAscArrays(leftArray, rightArray, 'id')
    expect(result).toEqual([
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' }
    ])
  })
})
