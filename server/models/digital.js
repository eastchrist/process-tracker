'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class digital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  digital.init({
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    tag: DataTypes.STRING,
    address: DataTypes.STRING,
    position: DataTypes.INTEGER,
    idEquip: DataTypes.STRING,
    idTank: DataTypes.STRING,
    indexCreation: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'digital',
  });
  return digital;
};
