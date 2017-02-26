'use strict'

const express = require('express');
const router = express.Router();
const fs = require('fs');
const parseData = require('./parsingService');
const folder = `uploads`;
const outputPath = `./${ folder }/output.txt`;

function makeFolder(path) {
  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

function handleFile(req, res, next) {
  makeFolder(folder);
  let stream = fs.createWriteStream(outputPath);
  req.on('data', chunk => stream.write(chunk));
  req.on('end', next);
}

module.exports = (config) => {
  router.route(`/${config.api.upload}`)
    .post(handleFile, (req, res) => {
      parseData(outputPath).then(data => res.send(data));
  });

  return router;
};
