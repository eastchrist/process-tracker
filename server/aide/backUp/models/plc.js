'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  plc.init({
    idNode: DataTypes.STRING,
    name: DataTypes.STRING,
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