import { trimAll } from '..'

describe('trimAll', () => {
  it('should remove all occurrences of the specified characters', () => {
    expect(trimAll('foo bar foo', 'foo')).toBe(' bar ')
    expect(trimAll('foo bar foo', /foo|bar/g)).toBe('  ')
  })

  // 默认值
  it('should remove all occurrences of whitespace characters', () => {
    expect(trimAll(' foo bar foo ')).toBe('foobarfoo')
  })

  // 非英文字符
  it('should remove all occurrences of non-English characters', () => {
    expect(trimAll('我每天睡不着')).toBe('我每天睡不着')

    expect(trimAll('我每天睡不着', '我')).toBe('每天睡不着')

    expect(trimAll('我每天睡不着', /我|每天/g)).toBe('睡不着')

    expect(trimAll('我每天睡不着', '我每天睡不着')).toBe('')
  })
})
