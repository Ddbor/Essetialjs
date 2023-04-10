const toString = Object.prototype.toString

/**
 * 获取类型标签
 * @param value 要检查的值
 * @returns 返回类型标签
 */
function getTypeTag(value: any) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : toString.call(value)
}

export default getTypeTag
