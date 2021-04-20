'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class area extends Model {
    static associate( { factory } ) {
      this.belongsTo(factory, { foreignKey: 'idFactory', as: 'factory'})
    }
  };
  area.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    position: DataTypes.INTEGER,
    menu: DataTypes.STRING,
    idFactory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'area',
  });
  return area;
};
