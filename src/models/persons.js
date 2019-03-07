module.exports = (sequelize, DataType) => {

  const Persons = sequelize.define('Persons', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    first_surname: {
      type: DataType.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    second_surname: {
      type: DataType.STRING(30),
      allowNull: true,
      validate: {
        notEmpty: false
      }
    },
    type: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    picture: {
      type: DataType.STRING(100),
      allowNull: true,
      validate: {
        notEmpty: false
      }
    },
  }, {
    timestamps: false,
    underscored: true
  });

  Persons.associate = (models) => {
    Persons.hasMany(models.Visits);
  };

  return Persons;
};