'use strict'
let simpleClipper = require('simple-clippings-parser');

function parseFile(filePath) {
    return simpleClipper.parseFile(filePath).then(data => data);
}

module.exports = parseFile;
