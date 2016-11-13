'use strict'

const express = require('express');
const clippingsRouter = require('./src/clippingsRouter');
const app = express();
const defaultConfig = require('./src/defaultConfig');

function start(cfg) {
  let config = Object.assign(defaultConfig, cfg);

  app.use('/', clippingsRouter(config));

  app.listen(config.port, function() {
      console.log(`app is running on port ${config.port}`);
  });
}

module.exports = {
  start: start
}
