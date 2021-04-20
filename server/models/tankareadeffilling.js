'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tankAreaDefFilling extends Model {
    static associate(models) {
    }
  };
  tankAreaDefFilling.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    position: DataTypes.INTEGER,
    dataComment: DataTypes.STRING,
    dataType: DataTypes.STRING,
    options: DataTypes.STRING(4000)
  }, {
    sequelize,
    modelName: 'tankAreaDefFilling',
  });
  return tankAreaDefFilling;
};
