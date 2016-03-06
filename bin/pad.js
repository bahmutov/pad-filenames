#!/usr/bin/env node

'use strict'

const filenames = process.argv.slice(2)
console.log('padding', filenames)
const fs = require('fs')

const pad = require('..')
const padded = pad(filenames)
filenames.forEach((before, k) => {
  const after = padded[k]
  if (before === after) {
    console.log('skipping', before)
    return
  }
  console.log('renaming', before, 'to', after)
  fs.renameSync(before, after)
})
