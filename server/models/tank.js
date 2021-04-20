'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tank extends Model {
    static associate(models) {
      this.belongsTo(models.tankArea, { foreignKey: 'idTankArea', as: 'tankArea'})
    }
  };
  tank.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    position: DataTypes.INTEGER,
    idTankArea: DataTypes.STRING,
    idTankDef: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tank',
  });
  return tank;
};
