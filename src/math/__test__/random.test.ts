import { random } from '..'

describe('random', () => {
  it('should return a random number', () => {
    const result = random(1, 10)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  })
})
