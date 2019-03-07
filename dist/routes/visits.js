"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (app) {
  var Visits = app.db.models.Visits;
  var Op = _sequelize.default.Op;
  app.get('/visits', function (req, res) {
    Visits.findAll({
      attributes: ['id', 'reason', 'person_id']
    }).then(function (result) {
      return res.json(result);
    }).catch(function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.get('/visits/:id', function (req, res) {
    Visits.findById(req.params.id, {
      attributes: ['id', 'reason', 'person_id']
    }).then(function (result) {
      return res.json(result);
    }).catch(function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.delete('/visits/:id', function (req, res) {
    Visits.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      return res.sendStatus(204);
    }).catch(function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.post('/visits', function (req, res) {
    Visits.create(req.body).then(function (result) {
      return res.json(result);
    }).catch(function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.put('/visits/:id', function (req, res) {
    Visits.update({
      reason: req.body.reason
    }, {
      where: {
        id: _defineProperty({}, Op.eq, req.params.id)
      }
    }).then(function (result) {
      return res.json({
        rowsUpdated: result
      });
    }).catch(function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.get('/visits/:id/count', function (req, res) {
    Visits.findAndCountAll({
      where: {
        id: _defineProperty({}, Op.eq, req.params.id)
      }
    }).then(function (result) {
      return res.json(result);
    }).catch(function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
};