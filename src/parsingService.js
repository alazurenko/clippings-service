'use strict'

const { parseFile: parse } = require('simple-clippings-parser');

const parseFile = path =>
  parse(path)
    .then(x => x)

module.exports = parseFile;
