"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (app) {
  var Persons = app.db.models.Persons;
  var Op = _sequelize.default.Op;
  app.get('/persons', function (req, res) {
    Persons.findAll({
      attributes: ['id', 'name', 'first_surname', 'second_surname', 'type', 'picture']
    }).then(function (result) {
      return res.json(result);
    }).catch(function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.get('/persons/:id', function (req, res) {
    Persons.findById(req.params.id, {
      attributes: ['id', 'name', 'first_surname', 'second_surname', 'type', 'picture']
    }).then(function (result) {
      return res.json(result);
    }).catch(function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.delete('/persons/:id', function (req, res) {
    Persons.destroy({
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
  app.post('/persons', function (req, res) {
    Persons.create(req.body).then(function (result) {
      return res.json(result);
    }).catch(function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.put('/persons/:id', function (req, res) {
    Persons.update({
      name: req.body.name,
      first_surname: req.body.first_surname,
      second_surname: req.body.second_surname,
      picture: req.body.picture || null
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
};