import isRegExp from '../is/isRegExp'

/**
 * 去除字符串中所有指定的字符
 * @param string 要处理的字符串
 * @param chars 要去除的字符，可以是字符串、正则表达式，如果不指定，则默认去除所有空白字符
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
function trimAll(string: string, chars: string | RegExp = ''): string {
  // 如果没有指定 chars 参数，则默认去除所有空白字符
  if (chars === '' || chars === undefined) {
    return string.replace(/\s+/g, '')
  }

  if (isRegExp(chars)) {
    return string.replace(chars as RegExp, '')
  }

  const regex = new RegExp(chars, 'g')

  return string.replace(regex, '')
}

export default trimAll
