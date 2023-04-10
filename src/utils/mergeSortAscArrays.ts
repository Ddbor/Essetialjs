import defaultCompareFunction from '../comparator/defaultCompareFunction'
import { isFunction } from '../is'
import { getValueByPath } from '../object'

/**
 * 合并两个数组按升序排序
 * @param leftArray
 * @param rightArray
 * @param pathOrGetter 用于获取数组元素的路径或函数
 * @returns
 */
function mergeSortAscArrays(
  leftArray: Array<any>,
  rightArray: Array<any>,
  pathOrGetter: any | ((item: any) => any)
) {
  const sortedArray = []

  // 使用数组指针排除已被添加到排序数组中的旧元素。
  let leftIndex = 0
  let rightIndex = 0

  const getValue = (obj: any) => {
    return isFunction(pathOrGetter)
      ? pathOrGetter(obj)
      : getValueByPath(obj, pathOrGetter)
  }

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    let minElement = null

    // 找到左右数组之间的最小元素。
    if (
      defaultCompareFunction(
        getValue(leftArray[leftIndex]),
        getValue(rightArray[rightIndex])
      ) <= 0
    ) {
      minElement = leftArray[leftIndex]
      // 向右递增索引指针
      leftIndex += 1
    } else {
      minElement = rightArray[rightIndex]
      // 向右递增索引指针
      rightIndex += 1
    }

    // 将最小元素添加到已排序的数组中。
    sortedArray.push(minElement)
  }

  // 左边或右边都会有剩余的元素
  // 将剩余的元素拼接成排序后的数组
  return sortedArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex))
}

export default mergeSortAscArrays
