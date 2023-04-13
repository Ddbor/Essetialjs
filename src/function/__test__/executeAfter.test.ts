import { executeAfter } from '..'

describe('executeAfter', () => {
  it('should execute the callback after the specified number of calls', () => {
    const callback = jest.fn()
    const fn = executeAfter(callback, 2)
    fn()
    fn()
    expect(callback).toHaveBeenCalledTimes(1)
    fn()
    expect(callback).toHaveBeenCalledTimes(2)
  })

  // this指向问题
  it('should bind the callback to the context of the returned function', () => {
    const callback = jest.fn()
    const fn = executeAfter(callback, 2)
    const context = {}
    fn.call(context)
    fn.call(context)
    expect(callback.mock.instances[0]).toBe(context)
  })

  // 参数问题
  it('should pass the arguments to the callback', () => {
    const callback = jest.fn()
    const fn = executeAfter(callback, 1)
    fn('a', 'b', 'c')
    expect(callback).toHaveBeenCalledWith('a', 'b', 'c')

    fn('x', 'y', 'z')
    expect(callback).toHaveBeenCalledWith('x', 'y', 'z')
  })

  // 参数默认值问题
  it('should use a default value of 1 if n is not provided', () => {
    const callback = jest.fn()
    const fn = executeAfter(callback)
    fn()
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
