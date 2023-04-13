import isFunction from '../is/isFunction'
import getValueByPath from '../object/getValueByPath'
import parsePathToArray from './parsePathToArray'

/**
 * 获取路径或者函数
 * @param pathOrGetter 路径或者函数
 * @returns 返回函数
 */
function getPathOrGetter<T>(
  pathOrGetter: string | any[] | ((item: T) => any)
): (item: T) => any {
  if (!isFunction(pathOrGetter)) {
    const pathArr = parsePathToArray(pathOrGetter)
    return (item: T) => getValueByPath(item, pathArr)
  }
  return pathOrGetter as (item: T) => any
}

export default getPathOrGetter
