function findLongest (strings) {
  return strings.reduce((longest, s) => {
    if (!longest) {
      return s
    }
    if (!s) {
      return undefined
    }
    return longest.length > s.length ? longest : s
  }, strings[0])
}

module.exports = findLongest
