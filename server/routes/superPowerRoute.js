var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var SuperPower = require('../models/superPowerSchema');

router.get('/', function (req, res) {
  SuperPower.find({}, function (err, favorites) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(superPowers);
  });
});

module.exports = router;
