'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class computer extends Model {
    static associate( { factory } ) {
      this.belongsTo(factory, { foreignKey: 'idFactory', as: 'factory'})
    }
  };
  computer.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    position: DataTypes.INTEGER,
    isServerMain: DataTypes.BOOLEAN,
    isServerLocal: DataTypes.BOOLEAN,
    isComputerLocal: DataTypes.BOOLEAN,
    isComputerCarto: DataTypes.BOOLEAN,
    idFactory: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'computer',
  });
  return computer;
};
