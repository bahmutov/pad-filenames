const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('pad left', () => {
  const pad = require('./pad-left')
  it('is a function', () => {
    la(is.fn(pad))
  })

  it('pads short string', () => {
    const padded = pad(5, 'foo')
    la(padded === '00foo', 'padded', padded)
  })

  it('pads empty string', () => {
    const padded = pad(5, '')
    la(padded === '00000', 'padded', padded)
  })

  it('leaves longer string alone', () => {
    const padded = pad(5, '12345678')
    la(padded === '12345678', 'padded', padded)
  })
})
