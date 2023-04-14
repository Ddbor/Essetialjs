import { trim } from '..'

describe('trim', () => {
  it('should remove all occurrences of the specified characters', () => {
    expect(trim('foo bar foo', 'foo')).toBe(' bar ')
    expect(trim('foo bar foo', /foo|bar/g)).toBe('  ')
  })

  // 默认值
  it('should remove all occurrences of whitespace characters', () => {
    expect(trim(' foo bar foo ')).toBe('foo bar foo')
  })

  // 非英文字符
  it('should remove all occurrences of non-English characters', () => {
    expect(trim(' 我每天睡不着 ')).toBe('我每天睡不着')

    expect(trim('我每天睡不着', '我')).toBe('每天睡不着')

    expect(trim('我每天睡不着', /我|不着/g)).toBe('每天睡')

    expect(trim('我每天睡不着', '我每天睡不着')).toBe('')
  })
})
