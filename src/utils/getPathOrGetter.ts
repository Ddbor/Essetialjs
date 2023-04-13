import isFunction from '../is/isFunction'
import getValueByPath from '../object/getValueByPath'
import parsePathToArray from './parsePathToArray'

/**
 * 获取路径或者函数
 * @param pathOrGetter 路径或者函数
 * @returns 返回函数
 */
function getPathOrGetter(pathOrGetter: string | any[] | ((item: any) => any)) {
  if (!isFunction(pathOrGetter)) {
    const pathArr = parsePathToArray(pathOrGetter)
    return (item: any) => getValueByPath(item, pathArr)
  }
  return pathOrGetter
}

export default getPathOrGetter
