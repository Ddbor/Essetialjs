---
nav: API
group:
  order: 5
order: 5
---

# 字符串

## trimAll

去除字符串中所有指定的字符

```javascript
trimAll('  abc  123   ')
// => 'abc123'

trimAll('foo bar foo', 'foo')
// => ' bar '

trimAll('foo bar foo', ['foo', 'bar'])
// => '  '

trimAll('foo bar foo', /foo|bar/g)
// => '  '
```

| 参数  | 说明       | 类型  | 默认值 |
| ----- | ---------- | ----- | ------ |
| string | 要处理的字符串 | `string` | -      |
| chars | 要去除的字符，可以是字符串、数组或正则表达式，如果不指定，则默认去除所有空白字符 | `string` | -      |

| 返回值          | 说明                                           | 类型      |
| --------------- | ---------------------------------------------- | --------- |
| 返回处理后的字符串 | 返回处理后的字符串 | `string` |