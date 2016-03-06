#!/usr/bin/env node

'use strict'

const filenames = process.argv.slcie(2)
console.log('padding', filenames)

const pad = require('..')
const padded = pad(filenames)
filenames.forEach((before, k) => {
  const after = padded[k]
  if (before === padded) {
    console.log('skipping', before)
    return
  }
  console.log('renaming', before, 'to', after)
})
