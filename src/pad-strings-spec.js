const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('pad strings', () => {
  const pad = require('./index')
  it('is a function', () => {
    la(is.fn(pad))
  })

  it('pads shorter string array', () => {
    const s = ['foo', 'a', 'bar']
    const padded = pad(s)
    la(padded[1] === '00a', 'padded second string', padded)
  })
})
