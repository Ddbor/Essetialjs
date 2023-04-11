import { randomInArray } from '..'

describe('randomInArray', () => {
  it('should return an array of random elements', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = randomInArray(array, 5)
    expect(result.length).toBe(5)
    expect(result.every((item) => array.includes(item))).toBeTruthy()
    // 由于随机性，这里只能检查是否包含重复元素
    expect(Array.from(new Set(result)).length).toBe(5)
    // 如果size大于数组长度，返回原数组
    expect(randomInArray(array, 11)).toEqual(array)
    // 如果size小于等于0，返回空数组
    expect(randomInArray(array, 0)).toEqual([])
    // 测试默认值
    expect(randomInArray(array).length).toBe(1)
  })
})
