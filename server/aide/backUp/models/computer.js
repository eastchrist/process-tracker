'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class computer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //static associate(models) {
    static associate( { factory }) {
      // define association here
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
