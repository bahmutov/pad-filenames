const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('find longest', () => {
  const find = require('./find-longest')
  it('is a function', () => {
    la(is.fn(find))
  })

  it('finds longest string', () => {
    const list = ['foo', 'a', 'bar3']
    const longest = find(list)
    la(longest === 'bar3', 'found longest', longest)
  })

  it('handles same length', () => {
    const list = ['foo', 'bar', 'baz']
    const longest = find(list)
    la(longest.length === 3, 'found longest', longest)
  })

  it('handles empty list', () => {
    const longest = find([])
    la(is.not.defined(longest))
  })
})
