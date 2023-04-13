function unique(arr: any[]) {
  const result = []
  const track = new Set()

  for (const item of arr) {
    if (!track.has(item)) {
      result.push(item)
      track.add(item)
    }
  }

  return result
}

export default unique
