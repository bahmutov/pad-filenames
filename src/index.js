const la = require('lazy-ass')
const is = require('check-more-types')

const findLongest = require('./find-longest')
la(is.fn(findLongest), 'missing find function')

const padLeft = require('./pad-left')

function padStrings (list) {
  la(is.not.empty(list), 'Empty list of filenames', list)
  la(is.arrayOf(is.string, list), 'not a list of strings', list)

  const longest = findLongest(list)
  la(is.unemptyString(longest), 'could not find longest string', list)

  return list.map((s) => padLeft(longest.length, s))
}

module.exports = padStrings
