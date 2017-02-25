'use strict'

const express = require('express');
const router = express.Router();
const fs = require('fs');
const parseData = require('./parsingService');
const outputPath = `../uploads/output.txt`;

function handleFile(req, res, next) {
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
