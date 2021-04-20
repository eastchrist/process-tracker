'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tankArea extends Model {
    static associate(models) {
      this.belongsTo(models.area, { foreignKey: 'idArea', as: 'area'})
    }
  };
  tankArea.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    position: DataTypes.INTEGER,
    idArea: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tankArea',
  });
  return tankArea;
};
