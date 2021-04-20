'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class analog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  analog.init({
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    tag: DataTypes.STRING,
    address: DataTypes.STRING,
    type: DataTypes.STRING,
    position: DataTypes.INTEGER,
    idEquip: DataTypes.STRING,
    idTank: DataTypes.STRING,
    indexCreation: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'analog',
  });
  return analog;
};