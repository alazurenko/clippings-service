'use strict'
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
const parseData = require('./parsingService');

module.exports = function(config) {
   router.route(`/${config.api.upload}`)
    .post(upload.single('file'), (req, res) => {
      let data = parseData(`${__dirname}/../uploads/${req.file.filename}`).then(data => {
        res.send(data);
      });
      fs.unlink(`uploads/${req.file.filename}`, err => {
        if(err) throw err;
      });
    })

    return router;
};
