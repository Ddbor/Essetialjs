import { getPathOrGetter } from '..'

describe('getPathOrGetter', () => {
  it('should return the pathOrGetter if it is a function', () => {
    const fn = () => {}
    expect(getPathOrGetter(fn)).toBe(fn)
  })

  it('should return a function that returns the value of the pathOrGetter if it is a string', () => {
    const obj = { a: 1 }
    expect((getPathOrGetter('a') as Function)(obj)).toBe(1)
  })

  it('should return a function that returns the value of the pathOrGetter if it is an array', () => {
    const obj = { a: { b: 1 } }
    expect((getPathOrGetter(['a', 'b']) as Function)(obj)).toBe(1)
  })
})
