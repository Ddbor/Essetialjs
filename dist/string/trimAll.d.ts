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
declare function trimAll(string: string, chars?: string | RegExp): string;
export default trimAll;
