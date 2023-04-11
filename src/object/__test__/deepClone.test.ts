import { deepClone } from '..'

describe('deepClone', () => {
  it('should clone a simple object', () => {
    const obj = { a: 1, b: 2 }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
  })

  it('should clone a nested object', () => {
    const obj = { a: 1, b: { c: 2 } }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
  })

  it('should clone a nested object with array', () => {
    const obj = { a: 1, b: { c: [1, 2, 3] } }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.b.c).not.toBe(obj.b.c)
  })

  it('should clone a simple array', () => {
    const arr = [1, 2, 3]
    const clonedArr = deepClone(arr)
    expect(clonedArr).toEqual(arr)
    expect(clonedArr).not.toBe(arr)
  })

  it('should clone a nested array', () => {
    const arr = [1, 2, [3, 4, 5]]
    const clonedArr = deepClone(arr)
    expect(clonedArr).toEqual(arr)
    expect(clonedArr).not.toBe(arr)
    expect(clonedArr[2]).not.toBe(arr[2])
  })

  it('should clone a nested array with object', () => {
    const arr = [1, 2, { a: 1, b: 2 }]
    const clonedArr = deepClone(arr)
    expect(clonedArr).toEqual(arr)
    expect(clonedArr).not.toBe(arr)
    expect(clonedArr[2]).not.toBe(arr[2])
  })

  it('should clone a nested object with array and object', () => {
    const obj = { a: 1, b: { c: [1, 2, 3], d: { e: 4 } } }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.b.c).not.toBe(obj.b.c)
    expect(clonedObj.b.d).not.toBe(obj.b.d)
  })

  it('should clone a nested object with array and object and date', () => {
    const obj = {
      a: 1,
      b: { c: [1, 2, 3], d: { e: 4 } },
      g: new Date()
    }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.b.c).not.toBe(obj.b.c)
    expect(clonedObj.b.d).not.toBe(obj.b.d)
    expect(clonedObj.g).not.toBe(obj.g)
  })

  it('should clone a nested object with array and object and regexp', () => {
    const obj = {
      a: 1,
      b: { c: [1, 2, 3], d: { e: 4 } },
      h: /abc/
    }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.b.c).not.toBe(obj.b.c)
    expect(clonedObj.b.d).not.toBe(obj.b.d)
    expect(clonedObj.h).not.toBe(obj.h)
  })

  it('should clone a nested object with array and object and set', () => {
    const obj = {
      a: 1,
      b: { c: [1, 2, 3], d: { e: 4 } },
      i: new Set([1, 2, 3])
    }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.b.c).not.toBe(obj.b.c)
    expect(clonedObj.b.d).not.toBe(obj.b.d)
    expect(clonedObj.i).not.toBe(obj.i)
  })

  it('should clone a nested object with array and object and map', () => {
    const obj = {
      a: 1,
      b: { c: [1, 2, 3], d: { e: 4 } },
      j: new Map([
        ['a', 1],
        ['b', 2]
      ])
    }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.b.c).not.toBe(obj.b.c)
    expect(clonedObj.b.d).not.toBe(obj.b.d)
    expect(clonedObj.j).not.toBe(obj.j)
  })

  it('should return the same object if the object is not supported', () => {
    const obj = {
      a: 1,
      b: { c: [1, 2, 3], d: { e: 4 } },
      k: new Error('test')
    }
    const clonedObj = deepClone(obj)
    expect(clonedObj.k).toBe(obj.k)
  })

  it('should clone a object with prototype', () => {
    const obj = Object.create({ x: 1, y: 2 })
    obj.a = 1
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.x).toBeUndefined()
    expect(clonedObj.y).toBeUndefined()
  })
})
