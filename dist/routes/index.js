"use strict";

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.json({
      status: 'dr_test api'
    });
  });
};