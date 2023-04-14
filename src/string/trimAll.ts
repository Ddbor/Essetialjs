import isArray from '../is/isArray'
import isRegExp from '../is/isRegExp'

/**
 * 去除字符串中所有指定的字符
 * @param string 要处理的字符串
 * @param chars 要去除的字符，可以是字符串、数组或正则表达式，如果不指定，则默认去除所有空白字符
 * @returns 返回处理后的字符串
 * @example
 *
 * trimAll('  abc  123   ')
 * // => 'abc123'
 *
 * trimAll('foo bar foo', 'foo')
 * // => ' bar '
 *
 * trimAll('foo bar foo', ['foo', 'bar'])
 * // => '  '
 *
 * trimAll('foo bar foo', /foo|bar/g)
 * // => '  '
 *
 */
function trimAll(
  string: string,
  chars: string | string[] | RegExp = ''
): string {
  // 如果没有指定 chars 参数，则默认去除所有空白字符
  if (chars === '' || chars === undefined) {
    return string.replace(/\s+/g, '')
  }

  if (isRegExp(chars)) {
    return string.replace(chars as RegExp, '')
  }

  // 如果 chars 是字符串，则将其转换为数组
  chars = isArray(chars) ? chars : ([chars] as string[])

  // 将数组中的字符换为正则表达式
  const regex = new RegExp((chars as string[]).join('|'), 'g')

  return string.replace(regex, '')
}

export default trimAll
