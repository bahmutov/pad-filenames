const la = require('lazy-ass')
const is = require('check-more-types')

la(is.fn(Array.from), 'missing Array.from')

const findLongest = require('./find-longest')
la(is.fn(findLongest), 'missing find function')

const padLeft = require('./pad-left')

function padStrings () {
  const list = Array.from(arguments)
  la(is.not.empty(list), 'Empty list of filenames', list)
  const longest = findLongest(list)
  la(is.unemptyString(longest), 'could not find longest string', list)

  return list.map((s) => padLeft(longest.length, s))
}

module.exports = padStrings
