"use strict";

module.exports = function (sequelize, DataType) {
  var Visits = sequelize.define('Visits', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    reason: {
      type: DataType.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    timestamps: false,
    underscored: true
  });

  Visits.associate = function (models) {
    Visits.belongsTo(models.Persons);
  };

  return Visits;
};