const la = require('lazy-ass')
const is = require('check-more-types')

function padLeft (n, s) {
  la(is.positive(n), 'expected positive number', n)
  la(is.string(s), 'missing string', s)

  if (s.length >= n) {
    return s
  }

  while (s.length < n) {
    s = '0' + s
  }

  return s
}

module.exports = padLeft
