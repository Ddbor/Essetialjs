import { getValueByPath } from '../'

describe('getValueByPath', () => {
  it('should return 1', () => {
    expect(getValueByPath({ a: { b: 1 } }, 'a.b')).toEqual(1)
    expect(getValueByPath({ a: { b: 1 } }, ['a', 'b'])).toEqual(1)
    expect(getValueByPath({ a: { b: [1] } }, ['a', 'b', 0])).toEqual(1)
    expect(getValueByPath({ a: { b: [1] } }, 'a.b[0]')).toEqual(1)
  })

  it('should return 2', () => {
    expect(getValueByPath({ a: { b: 1 } }, 'a.c', 2)).toEqual(2)
    expect(
      getValueByPath([{ a: { b: [{ c: 2 }] } }], '[0].a.b[0].c', 2)
    ).toEqual(2)
  })

  it('should return 3', () => {
    expect(getValueByPath({ a: [{ b: { c: 3 } }] }, 'a[0].b.c')).toEqual(3)
    expect(getValueByPath([{ a: { b: [1, 2, 3] } }], '[0].a.b[2]', 2)).toEqual(
      3
    )
  })

  it('should return undefined', () => {
    expect(getValueByPath({ a: { b: 1 } }, 'a.c')).toEqual(undefined)
    expect(getValueByPath({ a: { b: 1 } }, 'a.c.d')).toEqual(undefined)
    expect(getValueByPath({ a: { b: 1 } }, 'a.c.d.e')).toEqual(undefined)
    expect(getValueByPath({ a: { b: 1 } }, 'e.a')).toEqual(undefined)
    expect(getValueByPath(null, 'a.c.d.e.f')).toEqual(undefined)
    expect(getValueByPath(undefined, 'a.c.d.e.f')).toEqual(undefined)
  })
})
