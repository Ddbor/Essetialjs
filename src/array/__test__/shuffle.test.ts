import { shuffle } from '..'

describe('shuffle', () => {
  it('should shuffle array', () => {
    expect(shuffle([1, 2, 3, 4, 5]).length).toBe(5)
    expect(shuffle([{ a: 1 }, { a: 2 }, { a: 3 }]).length).toBe(3)
  })
})
