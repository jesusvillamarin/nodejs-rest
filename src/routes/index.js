module.exports = app => {
  app.get('/', (req, res) => {
    res.json({status: 'dr_test api'});
  });
};
