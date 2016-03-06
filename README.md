# pad-filenames
> Adds zeros in front of short filenames to remove sorting problems

[![NPM][pad-filenames-icon] ][pad-filenames-url]

[![Build status][pad-filenames-ci-image] ][pad-filenames-ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)

## install and use

    npm install --global pad-filenames

Imagine you have several files, for example `1.jpg, 2.jpg, ... 9.jpg, 10.jpg, 11.jpg`. Opening
these files from a Finder or file explorer always is prone to reordering files due to sorting
as strings. Padding them using this program solves this problem

    pad *.jpg
    # output
    01.jpg
    02.jpg
    ...
    09.jpg
    10.jpg
    11.jpg

All filenames will be the same length and padded with zeros on the left.

### Small print

Author: Gleb Bahmutov &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/pad-filenames/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[pad-filenames-icon]: https://nodei.co/npm/pad-filenames.png?downloads=true
[pad-filenames-url]: https://npmjs.org/package/pad-filenames
[pad-filenames-ci-image]: https://travis-ci.org/bahmutov/pad-filenames.png?branch=master
[pad-filenames-ci-url]: https://travis-ci.org/bahmutov/pad-filenames
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
