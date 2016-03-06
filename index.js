const la = require('lazy-ass')
const is = require('check-more-types')

la(is.fn(Array.from), 'missing Array.from')

function padFilenames () {
  const list = Array.from(arguments)
  la(is.not.empty(list), 'Empty list of filenames', list)
// const longest = findLongest(list)
}

module.exports = padFilenames
