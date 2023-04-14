import { isObject } from '..'

describe('isObject', () => {
  it('isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(() => {})).toBe(true)
    expect(isObject(new Map())).toBe(true)
    expect(isObject(new Set())).toBe(true)
    expect(isObject(new WeakMap())).toBe(true)
    expect(isObject(new WeakSet())).toBe(true)
    expect(isObject(new Date())).toBe(true)
    expect(isObject(new RegExp(''))).toBe(true)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject(1)).toBe(false)
    expect(isObject('')).toBe(false)
    expect(isObject(Symbol())).toBe(false)
    expect(isObject(true)).toBe(false)
    function fn() {}
    expect(isObject(fn)).toBe(true)
  })
})
