import express from 'express';

module.exports = app => {

  // Settings
  app.set('port', process.env.PORT || 3000);
  app.set('json spaces', 4);

  // middlewares
  app.use(express.json());
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

};