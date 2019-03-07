import Sequelize from 'sequelize';

module.exports = app => {

  const Persons = app.db.models.Persons;
  const Op = Sequelize.Op;

  app.get('/persons', (req, res) => {
    Persons.findAll({
        attributes: ['id', 'name', 'first_surname', 'second_surname', 'type', 'picture']
      })
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.get('/persons/:id', (req, res) => {
    Persons.findById(req.params.id, {
        attributes: ['id', 'name', 'first_surname', 'second_surname', 'type', 'picture']
      })
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.delete('/persons/:id', (req, res) => {
    Persons.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.post('/persons', (req, res) => {
    Persons.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.put('/persons/:id', (req, res) => {
    Persons.update({
      name: req.body.name,
      first_surname: req.body.first_surname,
      second_surname: req.body.second_surname,
      picture: req.body.picture || null
    }, {
      where: {
        id: {
          [Op.eq]: req.params.id
        }
      }
    })
    .then(result => res.json({
      rowsUpdated: result
    }))
    .catch(error => {
      res.status(412).json({
        msg: error.message
      });
    })
  });

};