'use strict'

const express = require('express');
const clippingsRouter = require('./src/clippingsRouter');
const defaultConfig = require('./src/defaultConfig');
const app = express();

function start(cfg) {
  let config = Object.assign({}, defaultConfig, cfg);

  app.use('/', clippingsRouter(config));
  app.listen(config.port, () => console.log(`clippings-service is running on port ${config.port}`) );
}

module.exports = { start };
