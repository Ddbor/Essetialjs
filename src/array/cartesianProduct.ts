/**
 * 计算笛卡尔积
 * @param arr 二维数组
 * @returns 笛卡尔积
 * @example
 * cartesianProduct([[1, 2], [3, 4]]) // [[1, 3], [1, 4], [2, 3], [2, 4]]
 * cartesianProduct([['a', 'b'], [1, 2], [true, false]]) // [['a', 1, true], ['a', 1, false], ['a', 2, true], ['a', 2, false], ['b', 1, true], ['b', 1, false], ['b', 2, true], ['b', 2, false]]
 */
function cartesianProduct(arr: any[][]) {
  const result = []
  const n = arr.length
  // 指向每个数组中当前元素的指针
  const pointers = new Array(n).fill(0)
  while (true) {
    // 生成一个元组
    const tuple = new Array(n)
    // 将每个数组中的当前元素放入元组中
    for (let i = 0; i < n; i++) {
      tuple[i] = arr[i][pointers[i]]
    }
    // 将元组放入结果中
    result.push(tuple)

    let k = n - 1
    // 如果指针已经指向了数组的最后一个元素，则将指针指向数组的第一个元素
    // 并将指针向前移动一位
    // 如果所有的指针都已经指向了数组的最后一个元素，则跳出循环
    while (k >= 0 && pointers[k] === arr[k].length - 1) {
      pointers[k] = 0
      k--
    }
    if (k < 0) {
      break
    }

    // 将指针指向的数组的下一个元素
    pointers[k]++
  }

  return result
}

export default cartesianProduct
