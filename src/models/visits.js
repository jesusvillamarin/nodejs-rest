module.exports = (sequelize, DataType) => {

  const Visits = sequelize.define('Visits', {
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

  Visits.associate = (models) => {
    Visits.belongsTo(models.Persons);
  };

  return Visits;
};