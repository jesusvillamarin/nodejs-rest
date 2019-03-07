import Sequelize from 'sequelize';

module.exports = app => {
  
  const Visits = app.db.models.Visits;
  const Op = Sequelize.Op;

  app.get('/visits', (req, res) => {
    Visits.findAll({
        attributes: ['id', 'reason', 'person_id']
      })
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.get('/visits/:id', (req, res) => {
    Visits.findById(req.params.id, {
        attributes: ['id', 'reason', 'person_id']
      })
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.delete('/visits/:id', (req, res) => {
    Visits.destroy({
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

  app.post('/visits', (req, res) => {
    Visits.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({
          msg: error.message
        });
      });
  });

  app.put('/visits/:id', (req, res) => {
    Visits.update({
      reason: req.body.reason
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

  app.get('/visits/:id/count', (req, res) => {
    Visits.findAndCountAll({
      where: {
          id: {
            [Op.eq]: req.params.id
          }
      }
    })
    .then(result => res.json(result))
    .catch(error => {
      res.status(412).json({
        msg: error.message
      });
    })
  })

};