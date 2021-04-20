'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plc extends Model {
    static associate(models) {
      this.belongsTo(models.area, { foreignKey: 'idArea', as: 'area'})
      this.belongsTo(models.server, { foreignKey: 'idServer', as: 'server'})
    }
  };
  plc.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
    name1: DataTypes.STRING,
    position: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    connection: DataTypes.STRING,
    slot: DataTypes.STRING,
    rack: DataTypes.STRING,
    ip: DataTypes.STRING,
    idServer: DataTypes.STRING,
    idArea: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plc',
  });
  return plc;
};
