import { getTypeTag } from '../'

describe('getTypeTag', () => {
  it('should return the type tag of the value', () => {
    expect(getTypeTag('')).toBe('[object String]')
    expect(getTypeTag(1)).toBe('[object Number]')
    expect(getTypeTag(true)).toBe('[object Boolean]')
    expect(getTypeTag(Symbol(''))).toBe('[object Symbol]')
    expect(getTypeTag(undefined)).toBe('[object Undefined]')
    expect(getTypeTag(null)).toBe('[object Null]')
    expect(getTypeTag({})).toBe('[object Object]')
    expect(getTypeTag([])).toBe('[object Array]')
    expect(getTypeTag(new Date())).toBe('[object Date]')
    expect(getTypeTag(/./)).toBe('[object RegExp]')
    expect(getTypeTag(new Error())).toBe('[object Error]')
    expect(getTypeTag(new Map())).toBe('[object Map]')
    expect(getTypeTag(new Set())).toBe('[object Set]')
    expect(getTypeTag(new WeakMap())).toBe('[object WeakMap]')
    expect(getTypeTag(new WeakSet())).toBe('[object WeakSet]')
    expect(getTypeTag(new ArrayBuffer(2))).toBe('[object ArrayBuffer]')
    expect(getTypeTag(new Int8Array())).toBe('[object Int8Array]')
    expect(getTypeTag(new Uint8Array())).toBe('[object Uint8Array]')
    expect(getTypeTag(new Uint8ClampedArray())).toBe(
      '[object Uint8ClampedArray]'
    )
    expect(getTypeTag(new Int16Array())).toBe('[object Int16Array]')
    expect(getTypeTag(new Uint16Array())).toBe('[object Uint16Array]')
    expect(getTypeTag(new Int32Array())).toBe('[object Int32Array]')
    expect(getTypeTag(new Uint32Array())).toBe('[object Uint32Array]')
    expect(getTypeTag(new Float32Array())).toBe('[object Float32Array]')
    expect(getTypeTag(new Float64Array())).toBe('[object Float64Array]')
    expect(getTypeTag(new DataView(new ArrayBuffer(2)))).toBe(
      '[object DataView]'
    )
    expect(getTypeTag(new Promise(() => {}))).toBe('[object Promise]')
    expect(getTypeTag(() => {})).toBe('[object Function]')
    expect(getTypeTag(Object.create(null))).toBe('[object Object]')
    expect(getTypeTag(new Proxy({}, {}))).toBe('[object Object]')
  })
})
